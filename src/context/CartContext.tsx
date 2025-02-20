import React, { createContext, useContext, useState, useEffect } from 'react';
import cartService, { Cart, CartItem } from '../services/cart.service';
import { useAuth } from './AuthContext';
import { products } from '../components/mock/Products';


interface CartContextType {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (id_produit: number) => void;
  removeFromCart: (id_produit: number) => void;
  updateQuantity: (id_produit: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        try {
          const cart = await cartService.getCart();
          setCartItems(cart.items || []); // Assurez-vous que items est un tableau
        } catch (error) {
          console.error('Error fetching cart:', error);
          setCartItems([]); // En cas d'erreur, initialiser avec un tableau vide
        }
      } else {
        setCartItems([]); // Réinitialiser le panier si l'utilisateur n'est pas connecté
      }
    };

    fetchCart();
  }, [user]);

  const addToCart = async (id_produit: number) => {
    try {
      const cart = await cartService.addItem(id_produit, 1);
      setCartItems(cart.items);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = async (id_produit: number) => {
    try {
      const cart = await cartService.removeItem(id_produit);
      setCartItems(cart.items);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateQuantity = async (id_produit: number, quantity: number) => {
    try {
      const cart = await cartService.updateItemQuantity(id_produit, quantity);
      setCartItems(cart.items);
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  const clearCart = async () => {
    try {
      await cartService.clearCart();
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  // Calculer le nombre total d'articles
  const totalItems = Array.isArray(cartItems) 
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  // Calculer le prix total
  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => {
        const product = products.find(p => p.id === item.id_produit);
        return total + (product?.currentPrice || 0) * item.quantity;
      }, 0)
    : 0;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};