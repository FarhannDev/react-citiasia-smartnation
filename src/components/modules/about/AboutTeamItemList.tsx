import { Col, Row } from 'react-bootstrap';
import AboutTeamItem from './AboutTeamItem';

type AboutTeamItemListProps = { teams: Teams[] };

const AboutTeamItemList = ({ teams }: AboutTeamItemListProps) => {
  return (
    <Row className="justify-content-start g-4 py-5">
      {teams?.map((team) => (
        <Col lg={6} xl={4} md={6} key={team.id}>
          <AboutTeamItem {...team} />
        </Col>
      ))}
    </Row>
  );
};

export default AboutTeamItemList;
