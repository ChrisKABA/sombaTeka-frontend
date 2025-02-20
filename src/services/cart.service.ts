import axios from 'axios';

const API_URL = 'http://localhost:3333';

export interface CartItem {
  id_produit: number;
  quantity: number;
}

export interface Cart {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
}

class CartService {
  async getCart() {
    try {
      const response = await axios.get<Cart>(`${API_URL}/cart`, {
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

  async addItem(id_produit: number, quantity: number) {
    try {
      const response = await axios.post<Cart>(`${API_URL}/cart/items`, 
        { id_produit, quantity },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateItemQuantity(id_produit: number, quantity: number) {
    try {
      const response = await axios.put<Cart>(
        `${API_URL}/cart/items/${id_produit}`,
        { quantity },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async removeItem(id_produit: number) {
    try {
      const response = await axios.delete<Cart>(`${API_URL}/cart/items/${id_produit}`, {
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

  async clearCart() {
    try {
      const response = await axios.delete<Cart>(`${API_URL}/cart`, {
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

export default new CartService();