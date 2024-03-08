import React from 'react';
import ProgramRowItem from './ProgramRowItem';

type ProgramRowItemListProps = {
  programs: Program[];
  ctaLabel: string | undefined;
};

const ProgramRowItemList: React.FC<ProgramRowItemListProps> = ({
  programs,
  ctaLabel,
}) => {
  return (
    <div className="d-flex flex-column py-5">
      {programs?.map((program) => (
        <ProgramRowItem key={program.id} {...program} catLabel={ctaLabel} />
      ))}
    </div>
  );
};

export default ProgramRowItemList;
