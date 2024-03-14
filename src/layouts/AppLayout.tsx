import React, { type ReactNode } from 'react';
import styles from '../assets/styles/modules/app.module.css';
import TopNavigation from '../components/common/navigation/TopNavigation';
import FooterNavigation from '../components/common/navigation/FooterNavigation';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <TopNavigation />
    <div className={styles.appContentWrapper}>
      {children}
      {/* Ini adalah di mana Anda memasukkan komponen anak */}
    </div>

    <FooterNavigation />
  </>
);

export default AppLayout;
