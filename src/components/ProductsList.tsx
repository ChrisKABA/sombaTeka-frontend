import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/ProductType';

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products: initialProducts }: ProductsListProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [products, setProducts] = useState(initialProducts);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleDelete = (productId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleStatusChange = (productId: number, newStatus: 'published' | 'hidden') => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, status: newStatus } : p
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Liste des Produits</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Exporter
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Importer
            </button>
            <button
              onClick={() => navigate('/add-product')}
              className="px-4 py-2 bg-primaryColor text-white rounded-lg hover:bg-blue-700"
            >
              Ajouter un produit
            </button>
          </div>
        </div>
        
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primaryColor focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primaryColor focus:border-transparent"
          >
            <option value="all">Tous les statuts</option>
            <option value="published">Affiché</option>
            <option value="hidden">Retiré</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primaryColor focus:border-transparent"
          >
            <option value="all">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 py-3 px-4">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="text-left py-3 px-4 font-semibold">ID</th>
              <th className="text-left py-3 px-4 font-semibold">Produit</th>
              <th className="text-left py-3 px-4 font-semibold">Statut</th>
              <th className="text-left py-3 px-4 font-semibold">Prix</th>
              <th className="text-left py-3 px-4 font-semibold">Stock</th>
              <th className="text-left py-3 px-4 font-semibold">Catégorie</th>
              <th className="text-center py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="py-3 px-4">#{product.id}</td>
                <td className="py-3 px-4 flex items-center">
                  <div className="flex items-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-[80px] h-[80px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="font-medium text-sm">{product.name}</div>
                </td>
                <td className="py-3 px-4">
                  <select
                    value={product.status}
                    onChange={(e) => handleStatusChange(product.id, e.target.value as 'published' | 'hidden')}
                    className="px-2 py-1 border rounded-lg text-sm"
                  >
                    <option value="published">Affiché</option>
                    <option value="hidden">Retiré</option>
                  </select>
                </td>
                <td className="py-3 px-4">
                  <div className="font-medium">${product.currentPrice}</div>
                  {product.oldPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      ${product.oldPrice}
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">{product.stock}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">
                  <div className="flex justify-center space-x-2">
                    <button 
                      onClick={() => navigate(`/edit-product/${product.id}`)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}