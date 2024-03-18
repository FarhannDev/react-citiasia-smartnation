import { useParams } from 'react-router-dom';
import { program } from '../../utils/data/programsData';
import { Container } from 'react-bootstrap';
import styles from '@/assets/styles/modules/programs.module.css';
import MyComponent from '../../components/MyComponent';
import ContentLayout from '../../layouts/ContentLayout';

const ProgramDetailPage = () => {
  const { programId } = useParams();

  const programs: Program | undefined = program.find(
    (program) => program.id === programId?.toString()
  );

  return (
    <>
      <ContentLayout>
        <section className={styles.sectionProgramSmartnation}>
          <Container className={styles.programSmartnationContainer}>
            <MyComponent.ProgramDetail programs={programs} />
          </Container>
        </section>
      </ContentLayout>
    </>
  );
};

export default ProgramDetailPage;
