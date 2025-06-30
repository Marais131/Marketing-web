// API 配置
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

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
    
    return response;
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
};

export default apiConfig; 