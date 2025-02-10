import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { footerData } from '../../data/footerData';


interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer 
          contactInfo={footerData.contactInfo}
          sections={footerData.sections}
        />
      </div>
    );
  };

  export default MainLayout;
