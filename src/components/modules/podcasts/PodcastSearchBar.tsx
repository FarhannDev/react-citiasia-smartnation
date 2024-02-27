import { Button, Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import styles from '@/assets/styles/modules/podcasts.module.css';

const PodcastSearchBar = () => {
  return (
    <Form>
      <InputGroup className="mb-3">
        <Form.Control
          className={styles.podcastSearchBarInput}
          placeholder="Cari podcast"
          aria-label="Cari podcast"
          aria-describedby="basic-addon2"
        />
        <Button
          type="submit"
          variant="outline"
          id="button-addon2"
          className={styles.podcastSearchBarButton}
        >
          <BsSearch fontSize={18} color="888" />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default PodcastSearchBar;
