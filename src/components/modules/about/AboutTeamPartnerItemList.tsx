import AboutTeamPartnerItem from './AboutTeamPartnerItem';

type AboutTeamPartnerItemListProps = {
  partners: Partners[];
};

const AboutTeamPartnerItemList = ({
  partners,
}: AboutTeamPartnerItemListProps) => {
  return (
    <div className="row justify-content-start g-4 py-5 row-cols-3   row-cols-md-6">
      {partners?.map((partner) => (
        <div className="col" key={partner.id}>
          <AboutTeamPartnerItem {...partner} />
        </div>
      ))}
    </div>
  );
};

export default AboutTeamPartnerItemList;
