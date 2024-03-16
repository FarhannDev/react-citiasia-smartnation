import ErrorLayout from '../layouts/ErrorLayout';
import NotFound from '../components/common/empty/NotFound';

const NotFoundPage = () => {
  return (
    <>
      <ErrorLayout>
        <NotFound />
      </ErrorLayout>
    </>
  );
};

export default NotFoundPage;
