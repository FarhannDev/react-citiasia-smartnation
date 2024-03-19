import React, { type ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import styles from '@/assets/styles/modules/auth.module.css';
interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <Container className={styles.authLayoutContainer}>{children}</Container>
      <hr className="text-secondary" />
    </div>
  );
};

export default AuthLayout;
