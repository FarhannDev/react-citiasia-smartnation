import React, { ReactNode } from 'react';
import TopNavigation from '../components/common/navigation/TopNavigation';

type AppLayoutProps = { children: ReactNode };

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <TopNavigation />
      <div className="app-content-wrapper">
        {children}
        {/* Ini adalah di mana Anda memasukkan komponen anak */}
      </div>
    </>
  );
};

export default AppLayout;
