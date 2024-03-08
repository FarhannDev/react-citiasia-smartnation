import React, { type ReactNode } from 'react';
import loadable from '@loadable/component';

// const TopNavigation = loadable(
//   () => import('../components/common/navigation/TopNavigation')
// );
const FooterNavigation = loadable(
  () => import('../components/common/navigation/FooterNavigation')
);

import styles from '../assets/styles/modules/app.module.css';
import TopNavigation from '../components/common/navigation/TopNavigation';

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
