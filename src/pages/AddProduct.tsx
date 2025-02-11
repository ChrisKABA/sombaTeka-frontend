import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products, addProduct } from '../components/mock/Products';
import type { Product } from '../types/ProductType';

export default function AddProduct() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '0.00',
    oldPrice: '0.00',
    stock: '0.00',
    weight: '0.00',
    category: '',
    supplier: '',
    isPhysicalProduct: false
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trouver le dernier ID
    const lastId = Math.max(...products.map(p => p.id));

    // Créer le nouveau produit
    const newProduct: Product = {
        id: lastId + 1,
        name: productData.name,
        rating: 0,
        currentPrice: parseFloat(productData.price),
        oldPrice: parseFloat(productData.oldPrice) || undefined,
        image: selectedImage || '/defaultProduit.svg',
        onSale: parseFloat(productData.oldPrice) > 0,
        description: productData.description,
        status: "published",
        stock: parseInt(productData.stock),
        weight: parseFloat(productData.weight),
        category: productData.category,
        supplier: productData.supplier
      };
  
      // Ajouter le produit au tableau
      addProduct(newProduct);
      
      navigate(-1);
  };

  return (
    <div className='bg-bodyBacgound'>
        <div className="max-w-4xl mx-auto pt-[30px] pb-[40px]">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Ajouter un Produit</h1>
                <div className="flex gap-3">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 text-primaryColor border border-primaryColor rounded-lg hover:bg-gray-50"
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    form="productForm"
                    className="px-6 py-2 bg-primaryColor text-white rounded-lg hover:bg-blue-700"
                >
                    Enregistrer
                </button>
                </div>
            </div>

            <form id="productForm" onSubmit={handleSubmit} className="space-y-6 bg-white shadow divide-y">
                {/* Informations de base */}
                <div className="p-6">
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-4">
                        Nom du produit
                        </label>
                        <input
                        type="text"
                        value={productData.name}
                        onChange={(e) => setProductData({...productData, name: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="tee-shirt à manche courte"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-4">
                        Description
                        </label>
                        <div className="border rounded-lg">
                        <div className="border-b px-3 py-2 flex items-center gap-2">
                            <select className="text-sm border-none focus:ring-0">
                            <option>Paragraphe</option>
                            </select>
                            <div className="h-4 border-r"></div>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded">B</button>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded italic">I</button>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded underline">U</button>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded">A</button>
                            <div className="h-4 border-r"></div>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            </button>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                            </svg>
                            </button>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            </button>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded">⋯</button>
                            <button type="button" className="p-1 hover:bg-gray-100 rounded ml-auto">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                            </svg>
                            </button>
                        </div>
                        <textarea
                            rows={6}
                            value={productData.description}
                            onChange={(e) => setProductData({...productData, description: e.target.value})}
                            className="w-full px-3 py-2 border-none focus:ring-0"
                        ></textarea>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-4">
                        Image du produit
                        </label>
                        <div 
                          onClick={handleImageClick}
                          className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50"
                        >
                            {selectedImage ? (
                              <div className="relative">
                                <img 
                                  src={selectedImage} 
                                  alt="Product preview" 
                                  className="max-h-64 mx-auto"
                                />
                                <p className="mt-2 text-sm text-gray-600">Cliquez pour changer l'image</p>
                              </div>
                            ) : (
                              <button type="button" className="text-primaryColor hover:text-blue-700">
                                Télécharger un nouveau média
                              </button>
                            )}
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-4">
                        Catégorie
                        </label>
                        <input
                        type="text"
                        value={productData.category}
                        onChange={(e) => setProductData({...productData, category: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="tee-shirt à manche courte"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-4">
                        Fournisseur
                        </label>
                        <input
                        type="text"
                        value={productData.supplier}
                        onChange={(e) => setProductData({...productData, supplier: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nom du fournisseur"
                        />
                    </div>
                </div>

                {/* Prix */}
                <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Prix</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Prix
                            </label>
                            <div className="relative">
                                <input
                                type="number"
                                step="0.01"
                                value={productData.price}
                                onChange={(e) => setProductData({...productData, price: e.target.value})}
                                className="w-full pl-3 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <span className="absolute right-3 top-2 text-gray-500">$</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Prix avant réduction
                            </label>
                            <div className="relative">
                                <input
                                type="number"
                                step="0.01"
                                value={productData.oldPrice}
                                onChange={(e) => setProductData({...productData, oldPrice: e.target.value})}
                                className="w-full pl-3 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <span className="absolute right-3 top-2 text-gray-500">$</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stock */}
                <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Stock</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantité
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                value={productData.stock}
                                onChange={(e) => setProductData({...productData, stock: e.target.value})}
                                className="w-full pl-3 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <span className="absolute right-3 top-2 text-gray-500">$</span>
                        </div>
                    </div>
                </div>

                {/* Expédition */}
                <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Expédition</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Poids
                            </label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                <input
                                    type="number"
                                    step="0.01"
                                    value={productData.weight}
                                    onChange={(e) => setProductData({...productData, weight: e.target.value})}
                                    className="w-full pl-3 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <span className="absolute right-3 top-2 text-gray-500">$</span>
                                </div>
                                <select className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="kg">kg</option>
                                <option value="g">g</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="physicalProduct"
                                checked={productData.isPhysicalProduct}
                                onChange={(e) => setProductData({...productData, isPhysicalProduct: e.target.checked})}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="physicalProduct" className="ml-2 text-sm text-gray-700">
                                Produit Physique
                            </label>
                        </div>
                    </div>
                </div>

                {/* Référencement */}
                <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Référencement sur les moteurs de recherche</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ma boutique
                        </label>
                        <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://s16675-g5.sombateka.com/products/tee-shirt"
                        />
                    </div>
                </div>
            </form>
        </div>
    </div>
    
  );
}