import React, { type ReactNode } from 'react';
import styles from '@/assets/styles/modules/error.module.css';
import { Container } from 'react-bootstrap';

interface ErrorLayoutProps {
  children: ReactNode;
}

const ErrorLayout: React.FC<ErrorLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.errorPageLayout}>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default ErrorLayout;
