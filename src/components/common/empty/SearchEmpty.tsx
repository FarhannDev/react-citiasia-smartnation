import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import iconEmptyPage from '/images/smartnation/icons/sn_icon_emptypage.png';

type SearchEmptyProps = { title: string };

const SearchEmpty: React.FC<SearchEmptyProps> = ({
  title = 'Pencarian Tidak Ditemukan',
}) => {
  return (
    <div className="search-empty">
      <div className="search-empty__content ">
        <LazyLoadImage
          alt="sn_icon_emptypage"
          effect="blur"
          src={iconEmptyPage}
          className="search-empty__content-logo img-fluid"
        />

        <h4 className="search-empty__content-heading">{title}</h4>
      </div>
    </div>
  );
};

export default SearchEmpty;
