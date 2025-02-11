import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import DashboardSidebar, { MenuItem } from '../components/DashboardSidebar';
import ProductsList from '../components/ProductsList';
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
      <div className="bg-white shadow p-6">
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

export default function SellerDashboard() {
//   const navigate = useNavigate();
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductsList products={products} />;
      default:
        return (
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">En cours de développement</h2>
            <p className="text-gray-600">Cette fonctionnalité sera bientôt disponible.</p>
          </div>
        );
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