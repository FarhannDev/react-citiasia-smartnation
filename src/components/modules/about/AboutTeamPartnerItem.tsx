import { Figure } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type AboutTeamPartnerItemProps = Partners;

const AboutTeamPartnerItem = ({
  name,
  sourceImageUrl,
}: AboutTeamPartnerItemProps) => {
  return (
    <Figure>
      <LazyLoadImage
        width={90}
        height={90}
        effect="blur"
        alt={name}
        title={name}
        src={sourceImageUrl}
      />
    </Figure>
  );
};

export default AboutTeamPartnerItem;
