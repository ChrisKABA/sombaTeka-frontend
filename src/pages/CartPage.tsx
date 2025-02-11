import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../components/mock/Products';

const CartPage: React.FC = () => {
  const { cartItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const getProductDetails = (productId: number) => {
    return products.find(p => p.id === productId);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleRemove = (productId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      removeFromCart(productId);
      setSelectedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleQuantityInput = (productId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      updateQuantity(productId, value);
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      setSelectedItems(new Set(cartItems.map(item => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleSelectItem = (productId: number) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        setSelectAll(false);
      } else {
        newSet.add(productId);
        if (newSet.size === cartItems.length) {
          setSelectAll(true);
        }
      }
      return newSet;
    });
  };

  const calculateSelectedTotal = () => {
    return cartItems
      .filter(item => selectedItems.has(item.id))
      .reduce((total, item) => {
        const product = getProductDetails(item.id);
        return total + (product?.currentPrice ?? 0) * item.quantity;
      }, 0);
  };

  return (
    <div className="max-w-[1270px] mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Votre Panier</h1>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-primaryColor text-white rounded hover:bg-primaryColor/90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
          </svg>
          Imprimer
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow print:shadow-none">
        <table className="w-full">
          <thead className="bg-primaryColor/10">
            <tr>
              <th className="w-12 px-4 py-3">
                <input 
                  type="checkbox" 
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300" 
                />
              </th>
              <th className="px-4 py-3 text-left">Produit</th>
              <th className="px-4 py-3 text-left">Prix</th>
              <th className="px-4 py-3 text-center">Quantité</th>
              <th className="px-4 py-3 text-center print:hidden">Action</th>
              <th className="px-4 py-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cartItems.map(item => {
              const product = getProductDetails(item.id);
              if (!product) return null;
              
              const itemTotal = product.currentPrice * item.quantity;
              
              return (
                <tr key={item.id}>
                  <td className="px-4 py-4">
                    <input 
                      type="checkbox" 
                      checked={selectedItems.has(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="rounded border-gray-300" 
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    ${product.currentPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center">
                      <button 
                        className="w-8 h-8 border rounded-l hover:bg-gray-100 transition-colors"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityInput(item.id, e)}
                        className="w-16 h-8 border-t border-b text-center focus:outline-none focus:ring-1 focus:ring-primaryColor" 
                      />
                      <button 
                        className="w-8 h-8 border rounded-r hover:bg-gray-100 transition-colors"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center print:hidden">
                    <button 
                      onClick={() => handleRemove(item.id)}
                      className="text-black hover:text-gray-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </td>
                  <td className="px-4 py-4 text-right font-medium">
                    ${itemTotal.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              Total à payer
            </div>
            <div className="text-2xl font-bold text-primaryColor">
              ${calculateSelectedTotal().toFixed(2)}
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-4 print:hidden">
            <button className="bg-primaryColor text-white px-6 py-2 rounded hover:bg-primaryColor/90 transition-colors">
              Passer la commande
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            margin: 1cm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CartPage;