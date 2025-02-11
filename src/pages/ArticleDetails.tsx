import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/layouts/StarRating';
import { products } from '../components/mock/Products';
import { Sellers } from '../components/mock/Sellers';

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));

  const seller = Sellers.find(s => s.id === (Number(id) % Sellers.length + 1));

  if (!product || !seller) {
    return <div className="text-center py-10">Produit non trouvé</div>;
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    console.log('Ajouter au panier:', {
      productId: product.id,
      quantity: quantity
    });
  };

  return (
    <div className='bg-bodyBacgound'>
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Images Section */}
                <div className="space-y-4">
                <div className="aspect-square w-full bg-white p-4 border rounded-lg">
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {[product.image, product.image, product.image, product.image].map((img, index) => (
                    <div key={index} className="aspect-square border rounded-lg p-2 cursor-pointer hover:border-primaryColor">
                        <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-contain" />
                    </div>
                    ))}
                </div>
                </div>

                {/* Product Info Section */}
                <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                
                <div className="flex items-center space-x-4">
                    <StarRating rating={product.rating} />
                </div>

                <div className="flex items-center space-x-4">
                    {product.oldPrice && (
                    <span className="text-lg text-gray-400 line-through">
                        ${product.oldPrice.toFixed(2)}
                    </span>
                    )}
                    <span className="text-2xl font-bold text-primaryColor">
                    ${product.currentPrice.toFixed(2)}
                    </span>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-md">
                    <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                        -
                    </button>
                    <span className="px-4 py-2 border-x">{quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                        +
                    </button>
                    </div>
                    <button
                    onClick={handleAddToCart}
                    className="px-8 py-2 bg-primaryColor text-white rounded-md hover:bg-primaryColor/90 transition-colors"
                    >
                    Ajouter au panier
                    </button>
                </div>

                {/* Vendeur Info */}
                <div className="border-t pt-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src={seller.image}
                            alt={seller.fullName}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{seller.fullName}</h3>
                                <StarRating rating={seller.rating} />
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                {seller.description}
                            </p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                <span>Spécialité: {seller.specialty}</span>
                                <span>•</span>
                                <span>Depuis {seller.joinedDate}</span>
                                <span>•</span>
                                <span>{seller.totalSales} ventes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="border-t pt-6">
                    <h2 className="text-xl font-semibold mb-4">Description</h2>
                    <p className="text-gray-600">
                    {product.description || "Description détaillée du produit à venir..."}
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default ArticleDetails;