import React, { useState } from 'react';
import DashboardSidebar, { MenuItem } from '../components/DashboardSidebar';
import { products } from '../components/mock/Products';

const sellerMenuItems: MenuItem[] = [
    { 
      id: 'dashboard', 
      label: 'Tableau de Bord', 
      icon: '/public/imageDashboard/fa_dashboard.svg'
    },
    { 
      id: 'orders', 
      label: 'Commandes', 
      icon: '/public/imageDashboard/order.svg'
    },
    { 
      id: 'products', 
      label: 'Produits', 
      icon: '/public/imageDashboard/product.svg'
    },
    { 
      id: 'clients', 
      label: 'Clients', 
      icon: '/public/imageDashboard/user.svg'
    },
    { 
      id: 'analytics', 
      label: 'Analyse des Données', 
      icon: '/public/imageDashboard/data.svg'
    },
    { 
      id: 'marketing', 
      label: 'Marketing', 
      icon: '/public/imageDashboard/marketing.svg'
    },
    { 
      id: 'pos', 
      label: 'Point de Vente', 
      icon: '/public/imageDashboard/shop.svg'
    },
    { 
      id: 'online-store', 
      label: 'Boutique en Ligne', 
      icon: '/public/imageDashboard/boutique.svg'
    },
  ];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Clients Block */}
      <div className="bg-white  shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Clients</h3>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded"><span>←</span></button>
            <button className="p-1 hover:bg-gray-100 rounded"><span>→</span></button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Nombre Total de Clients</span>
            <span>0.00$</span>
          </div>
          <div className="flex justify-between">
            <span>Client Récurrent</span>
            <span>0.00$</span>
          </div>
          <div className="flex justify-between">
            <span>Nombre Moyen De Visite Par Client</span>
            <span>0.00$</span>
          </div>
          <div className="flex justify-between">
            <span>Montant Moyen Depensé Par Un Visite</span>
            <span>0.00$</span>
          </div>
          <div className="flex justify-between">
            <span>Commentaire</span>
            <span>0 positif(s) 0 négatif(s)</span>
          </div>
        </div>
      </div>

      {/* Payment Types Block */}
      <div className="bg-white shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Type de Paiement</h3>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded"><span>←</span></button>
            <button className="p-1 hover:bg-gray-100 rounded"><span>→</span></button>
          </div>
        </div>
        <div>
          <h4 className="mb-4">Par montant du paiement</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-700 rounded"></div>
                <span>carte bancaire</span>
              </div>
              <div className="flex gap-4">
                <span>0.00$</span>
                <span>0%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>Espèces</span>
              </div>
              <div className="flex gap-4">
                <span>0.00$</span>
                <span>0%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-300 rounded"></div>
                <span>Autre</span>
              </div>
              <div className="flex gap-4">
                <span>0.00$</span>
                <span>0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Block */}
      <div className="bg-white shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Article</h3>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded"><span>←</span></button>
            <button className="p-1 hover:bg-gray-100 rounded"><span>→</span></button>
          </div>
        </div>
        <div>
          <h4 className="mb-4">Par Nombre de Vente par Article</h4>
          <div className="h-48 flex items-end gap-2">
            {[80, 40, 60, 20, 40, 30].map((height, index) => (
              <div 
                key={index}
                className="bg-blue-700 w-full"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* My Store Block */}
      <div className="bg-white shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Ma Boutique</h3>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded"><span>←</span></button>
            <button className="p-1 hover:bg-gray-100 rounded"><span>→</span></button>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-4">Choisissez Votre Thème Et Commencez A Prendre Des Commandes En Ligne En Quelques Minutes.</p>
          <img 
            src="./boutiquePicture.png"
            alt="Online Store"
            className="rounded-lg mb-4"
          />
          <button className="w-full bg-primaryColor text-white py-2 rounded hover:bg-blue-800 transition-colors">
            Prévisualiser le site
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Mes Produits</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Ajouter un produit
          </button>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 font-semibold">Produit</th>
              <th className="text-left py-3 px-4 font-semibold">Prix</th>
              <th className="text-left py-3 px-4 font-semibold">Promotion</th>
              <th className="text-left py-3 px-4 font-semibold">Note</th>
              <th className="text-left py-3 px-4 font-semibold">Statut</th>
              <th className="text-center py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 object-cover rounded-lg mr-3"
                      />
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium">${product.currentPrice}</div>
                    {product.oldPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        ${product.oldPrice}
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {product.onSale ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        En promotion
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        Prix normal
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="mr-1">{product.rating}</span>
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      En stock
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 px-4 text-center text-gray-500">
                  Aucun produit trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function SellerDashboard() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductsList />;
      default:
        return <div>En cours de développement</div>;
    }
  };

  return (
    <div className="bg-bodyBacgound pt-[20px]">
      <div className="flex max-w-[1270px] m-auto">
        <DashboardSidebar
          title="Mon Espace Vente"
          menuItems={sellerMenuItems}
          activeView={activeView}
          onViewChange={setActiveView}
          titleBgColor="bg-secondaryColor"
        />
        <main className="flex-1 pl-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}