// ===========================
// AED LAWS API 
// ===========================

const API_BASE_URL = "http://localhost:5000/api";
export const getStatesList = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/states`);
    if (!response.ok) {
      throw new Error(`Failed to fetch states: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching states:", error);
    throw error;
  }
};


export const getStateDetails = async (slug) => {
  try {
    if (!slug) throw new Error("No state slug provided");
    
    const response = await fetch(`${API_BASE_URL}/states/${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch state details: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching state details:", error);
    throw error;
  }
};


export const getAllLaws = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/laws`);
    if (!response.ok) {
      throw new Error(`Failed to fetch laws: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching laws:", error);
    throw error;
  }
};


export const getLawsByState = async (slug) => {
  try {
    if (!slug) throw new Error("No state slug provided");
    
    const response = await fetch(`${API_BASE_URL}/laws/${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch laws for state: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching laws by state:", error);
    throw error;
  }
};
