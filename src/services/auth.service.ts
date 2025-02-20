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
}

export interface User {
  id_user: number;
  email: string;
  fullName: string;
  image: string;
}

// Créer une instance axios avec la configuration de base
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

class AuthService {
  async login(data: LoginData) {
    try {
      if (!data.email || !data.password) {
        throw new Error('Email et mot de passe requis');
      }

      const response = await axiosInstance.post('/login', data);
      
      if (response.data?.user) {
        const user = response.data.user;
        localStorage.setItem('user', JSON.stringify(user));
        return response.data;
      } else {
        throw new Error(response.data?.message || 'Réponse invalide du serveur');
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error('Email ou mot de passe incorrect');
      }
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Une erreur est survenue lors de la connexion');
    }
  }

  async signup(data: SignupData) {
    try {
      if (!data.email || !data.password || !data.fullName) {
        throw new Error('Tous les champs sont obligatoires');
      }

      const response = await axiosInstance.post('/signup', data);
      
      if (response.data?.user) {
        const user = response.data.user;
        localStorage.setItem('user', JSON.stringify(user));
        return response.data;
      } else {
        throw new Error(response.data?.message || 'Réponse invalide du serveur');
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Une erreur est survenue lors de l\'inscription');
    }
  }

  async logout() {
    try {
      const token = localStorage.getItem('user');
      if (token) {
        await axiosInstance.post('/logout');
      }
    } finally {
      localStorage.removeItem('user');
    }
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        return null;
      }

      const response = await axiosInstance.get('/me');
      
      if (response.data?.user) {
        const user = response.data.user;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }
      
      return null;
    } catch (error) {
      localStorage.removeItem('user');
      return null;
    }
  }
}

export default new AuthService();