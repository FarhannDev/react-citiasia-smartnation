import { useParams } from 'react-router-dom';
import { program } from '../../utils/data/programsData';
import { Container } from 'react-bootstrap';
import styles from '@/assets/styles/modules/programs.module.css';
import ProgramDetail from '../../components/modules/programs/details/ProgramDetail';

const ProgramDetailPage = () => {
  const { programId } = useParams();

  const programs: Program | undefined = program.find(
    (program) => program.id === programId?.toString()
  );

  return (
    <>
      <section className={styles.sectionProgramSmartnation}>
        <Container className={styles.programSmartnationContainer}>
          <ProgramDetail programs={programs} />
        </Container>
      </section>
    </>
  );
};

export default ProgramDetailPage;
