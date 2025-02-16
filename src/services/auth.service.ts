import axios from 'axios';

const API_URL = 'http://localhost:3333';

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData extends LoginData {
  fullName: string;
  image?: string;
}

export interface User {
  id: number;
  email: string;
  fullName: string;
  image: string;
}

class AuthService {
  async login(data: LoginData) {
    try {
      const response = await axios.post(`${API_URL}/login`, data, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async signup(data: SignupData) {
    try {
      const response = await axios.post(`${API_URL}/signup`, data, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await axios.post(`${API_URL}/logout`, {}, {
        withCredentials: true
      });
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const response = await axios.get(`${API_URL}/me`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default new AuthService();