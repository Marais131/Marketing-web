// API 配置
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.PROD ? 'https://marketing-web-backend1-73o4a36jr-mo013ts-projects.vercel.app' : 'http://localhost:3001');

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
      // 在生產環境中，如果API失敗，返回演示數據
      if (import.meta.env.PROD && endpoint === '/api/content') {
        console.warn('API不可用，使用演示數據');
        return {
          json: async () => [
            {
              id: 1,
              type: "news",
              title: "歡迎來到中國文化大學行銷學系",
              content: "我們致力於培養具有品牌專業與跨領域整合力的新世代行銷人才。",
              category: "系所公告",
              date: "2024-01-01",
              views: 100,
              status: "published",
              images: [],
              author: "行銷系",
              displayPage: "home"
            }
          ]
        };
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    
    // 在生產環境中提供備用數據
    if (import.meta.env.PROD && endpoint === '/api/content') {
      return {
        json: async () => [
          {
            id: 1,
            type: "news",
            title: "歡迎來到中國文化大學行銷學系",
            content: "我們致力於培養具有品牌專業與跨領域整合力的新世代行銷人才。",
            category: "系所公告",
            date: "2024-01-01",
            views: 100,
            status: "published",
            images: [],
            author: "行銷系",
            displayPage: "home"
          }
        ]
      };
    }
    
    throw error;
  }
};

export default apiConfig; 