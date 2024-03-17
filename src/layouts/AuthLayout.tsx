import React, { type ReactNode } from 'react';
import styles from '@/assets/styles/modules/auth.module.css';
import { Container } from 'react-bootstrap';

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <Container className={styles.authLayoutContainer}>{children}</Container>
    </div>
  );
};

export default AuthLayout;
