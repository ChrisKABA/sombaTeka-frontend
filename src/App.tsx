// import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { footerData } from './data/footerData';
import './App.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

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
    <Router>
      <Layout>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </Layout>
    </Router>
  );
}

export default App
