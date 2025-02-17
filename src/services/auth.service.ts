import axios from 'axios';

const API_URL = 'http://localhost:3333';

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
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

  async signup(data: SignupData) {
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        image: data.image || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop'
      }, {
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

  async logout() {
    try {
      await axios.post(`${API_URL}/logout`, {}, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const response = await axios.get(`${API_URL}/me`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default new AuthService();