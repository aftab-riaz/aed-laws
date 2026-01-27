// ===========================
// AED LAWS API (Connected to Backend)
// ===========================

const API_BASE_URL = 'http://localhost:5000/api';


const fetchAPI = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};


export const getStatesList = async () => {
  return await fetchAPI('/states');
};

export const getStateDetails = async (slug) => {
  if (!slug) throw new Error('No state slug provided');
  return await fetchAPI(`/states/${slug}`);
};
