// import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ArticleDetails from './pages/ArticleDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import { footerData } from './data/footerData';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import SellerDashboard from './pages/SellerDashboard';
import AddProduct from './pages/AddProduct';
import './App.css'
import Signup from './pages/Signup';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/signup';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer 
        contactInfo={footerData.contactInfo} 
        sections={footerData.sections} 
      />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/article/:id" element={<ArticleDetails />} />
              <Route path="/panier" element={<CartPage />} />
              <Route path="/vendre" element={<SellerDashboard />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </main>
        </Layout>
      </Router>
    </CartProvider>
    
  );
}

export default App
