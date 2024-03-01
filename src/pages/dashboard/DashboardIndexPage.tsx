import styles from '@/assets/styles/modules/Dashboard.module.css';
import { Container } from 'react-bootstrap';
import DashboardIFormInput from '../../components/modules/dashboard/DashboardIFormInput';
import api from '../../utils/api/api';

type Props = Posts;

const DashboardIndexPage = () => {
  const addPosts = ({ title, categoryId, sourceImageUrl, content }: Props) => {
    api.createNewPosts({ title, categoryId, sourceImageUrl, content });
  };

  return (
    <>
      <section className={styles.dashboardSection}>
        <Container className={styles.dashboardContainer}>
          <h1 className={styles.dashboardHeading}>Dashboard</h1>

          <DashboardIFormInput addPosts={addPosts} />
        </Container>
      </section>
    </>
  );
};

export default DashboardIndexPage;
