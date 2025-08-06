// API 配置
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.PROD ? 'https://marketing-web-backend-beta.vercel.app' : 'http://localhost:3001');

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    content: '/api/content',
    contentByPage: '/api/content/by-page',
    publish: '/api/publish',
    adminLogin: '/api/admin/login',
    adminContent: '/api/admin/content',
    upload: '/api/admin/upload',
    websiteContent: '/api/website-content',
    operationLogs: '/api/operation-logs',
    userActivityStats: '/api/user-activity-stats',
    media: '/api/media',
    systemStatus: '/api/system-status'
  }
};

// 定義介面
interface ContentData {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  views?: number;
}

interface LoginCredentials {
  username: string;
  password: string;
}

interface PublishData {
  title: string;
  content: string;
  category: string;
  author?: string;
  image?: string;
}

// API 請求助手函數
interface ApiError extends Error {
  status?: number;
  statusText?: string;
  data?: string | Record<string, unknown>;
}

export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${apiConfig.baseURL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(url, {
      ...defaultOptions,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      const errorData = await response.text().catch(() => '');
      const error: ApiError = new Error(`API 請求失敗: ${response.status} ${response.statusText}`);
      error.status = response.status;
      error.statusText = response.statusText;
      error.data = errorData;
      throw error;
    }
    
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error(`API 請求失敗 (${endpoint}):`, error);
    
    // 網路錯誤處理
    if (error.name === 'AbortError') {
      throw new Error('請求超時，請檢查網路連接');
    }
    
    // 如果是生產環境且特定端點失敗，返回備用數據
    if (import.meta.env.PROD && endpoint === '/api/content') {
      console.warn('使用備用演示數據');
      return getFallbackContentData();
    }
    
    throw error;
  }
};

// 備用數據函數
const getFallbackContentData = () => [
  {
    id: 1,
    title: "行銷系2024年度招生說明會",
    content: "歡迎各位同學參加我們的招生說明會，了解行銷系的課程特色和未來發展方向。",
    author: "行銷系辦公室",
    date: "2024-01-15",
    category: "招生資訊",
    image: "/api/placeholder/400/300",
    views: 1250
  },
  {
    id: 2,
    title: "學生實習成果分享",
    content: "本學期實習同學在各大企業的優秀表現，展現了行銷系學生的專業能力。",
    author: "實習輔導組",
    date: "2024-01-10",
    category: "學生活動",
    image: "/api/placeholder/400/300",
    views: 890
  },
  {
    id: 3,
    title: "數位行銷趨勢講座",
    content: "邀請業界專家分享2024年數位行銷最新趨勢和實戰經驗。",
    author: "學術組",
    date: "2024-01-08",
    category: "學術活動",
    image: "/api/placeholder/400/300",
    views: 1450
  }
];

// 獲取內容的便捷函數
export const getContent = () => apiRequest(apiConfig.endpoints.content);
export const getContentByPage = (page: string, limit?: number) => {
  const url = `${apiConfig.endpoints.contentByPage}/${page}${limit ? `?limit=${limit}` : ''}`;
  return apiRequest(url);
};
export const publishContent = (data: PublishData) => apiRequest(apiConfig.endpoints.publish, {
  method: 'POST',
  body: JSON.stringify(data),
});
export const adminLogin = (credentials: LoginCredentials) => apiRequest(apiConfig.endpoints.adminLogin, {
  method: 'POST',
  body: JSON.stringify(credentials),
});
export const getSystemStatus = () => apiRequest(apiConfig.endpoints.systemStatus);

export default apiConfig; 