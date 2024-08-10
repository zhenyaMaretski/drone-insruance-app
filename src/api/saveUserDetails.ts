import axios from 'axios';

const API_URL = 'https://api.example.com';

export const saveUserDetails = async (data: {
  name: string;
  email: string;
  phoneNumber: string;
  insurancePlan: 'Basic' | 'Premium';
  location: {
    latitude: number;
    longitude: number;
  };
}) => {
  try {
    const response = await axios.post(`${API_URL}/user/saveDetails`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
