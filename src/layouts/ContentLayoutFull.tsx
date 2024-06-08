import React, { ReactNode } from 'react';
import styles from '@/assets/styles/modules/app.module.css';
import { useTheme } from '../hooks/useTheme';

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayoutFull: React.FC<ContentLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <div className={styles.contentLayout}>{children}</div>
      {theme === 'dark' ? <hr className="text-secondary" /> : null}
    </>
  );
};

export default ContentLayoutFull;
