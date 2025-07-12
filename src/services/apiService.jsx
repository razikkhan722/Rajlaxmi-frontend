import axios from "axios";


export const API_BASE_URL =
  "http://localhost:5001/rajlaxmi"; // Replace with your actual base URL

// 🔹 GET: Fetch data from a dynamic endpoint
export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 POST: Send data to a dynamic endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 PUT: Update data on a dynamic endpoint
export const updateData = async (endpoint, id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 DELETE: Remove data from a dynamic endpoint
export const deleteData = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 DELETE: Remove data from a dynamic endpoint
export const deleteProductAPI = async (endpoint, id, data) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`, {
      data: data, // Pass the data as a property of an object
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 GET: Fetch data for all wishlist 
export const getWishListData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAllWishlist`,{
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response.data?.wishlist;

  } catch (error) {
    throw error.response?.data || error.message;
  }
};


// =========================================
// APIs which Change according to logic
// =========================================

// Fetch Rating Data
export const FetchRatingDataAPI = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAllFeedback/${id}`,{
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response?.data;

  } catch (error) {
    throw error.response?.data || error.message;
  }
};