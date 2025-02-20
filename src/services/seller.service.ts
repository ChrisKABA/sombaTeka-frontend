import axios from 'axios';

const API_URL = 'http://localhost:3333';

export interface SellerRegistrationData {
  phone: string;
  address: string;
  description: string;
  name_boutique: string;
  profile_image?: string;
}

class SellerService {
  async register(data: SellerRegistrationData) {
    try {
      const response = await axios.post(`${API_URL}/sellers/register`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSellerProfile(id: number) {
    try {
      const response = await axios.get(`${API_URL}/sellers/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateProfile(id: number, data: Partial<SellerRegistrationData>) {
    try {
      const response = await axios.put(`${API_URL}/sellers/${id}`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new SellerService();