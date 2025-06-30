// API 配置
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.PROD ? 'https://marketing-backend1-jl78csnjt-mo0131s-projects.vercel.app' : 'http://localhost:3001');

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

// API 請求助手函數
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
    const response = await fetch(url, defaultOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API請求失敗:', error);
    
    // 如果是生產環境且API失敗，返回演示數據
    if (import.meta.env.PROD && endpoint === '/api/content') {
      return [
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
    }
    
    throw error;
  }
};

// 獲取內容的便捷函數
export const getContent = () => apiRequest(apiConfig.endpoints.content);
export const getContentByPage = (page: string, limit?: number) => {
  const url = `${apiConfig.endpoints.contentByPage}/${page}${limit ? `?limit=${limit}` : ''}`;
  return apiRequest(url);
};
export const publishContent = (data: any) => apiRequest(apiConfig.endpoints.publish, {
  method: 'POST',
  body: JSON.stringify(data),
});
export const adminLogin = (credentials: any) => apiRequest(apiConfig.endpoints.adminLogin, {
  method: 'POST',
  body: JSON.stringify(credentials),
});
export const getSystemStatus = () => apiRequest(apiConfig.endpoints.systemStatus);

export default apiConfig; 