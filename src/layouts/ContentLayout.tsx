import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import { useTheme } from '../hooks/useTheme';
import styles from '@/assets/styles/modules/app.module.css';

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <div className={styles.contentLayout}>
        <Container className={styles.contentLayoutContainer}>
          {children}
        </Container>

        {theme === 'dark' ? <hr className="text-secondary" /> : null}
      </div>
    </>
  );
};

export default ContentLayout;
