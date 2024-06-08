import React from 'react';
import MyComponent from '../../MyComponent';

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
        <MyComponent.ProgramRowItem
          key={program.id}
          {...program}
          catLabel={ctaLabel}
        />
      ))}
    </div>
  );
};

export default ProgramRowItemList;
