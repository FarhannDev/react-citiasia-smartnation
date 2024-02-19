import React, { ReactNode } from 'react';

type AppLayoutProps = { children: ReactNode };

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      {/* Ini adalah di mana Anda memasukkan komponen anak */}
    </div>
  );
};

export default AppLayout;
