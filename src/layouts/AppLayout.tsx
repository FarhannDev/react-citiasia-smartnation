import React, { ReactNode } from 'react';
import TopNavigation from '../components/common/navigation/TopNavigation';
import FooterNavigation from '../components/common/navigation/FooterNavigation';

import styles from '../assets/styles/modules/app.module.css';

type AppLayoutProps = { children: ReactNode };

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <TopNavigation />
      <div className={styles.appContentWrapper}>
        {children}
        {/* Ini adalah di mana Anda memasukkan komponen anak */}
      </div>

      <FooterNavigation />
    </>
  );
};

export default AppLayout;
