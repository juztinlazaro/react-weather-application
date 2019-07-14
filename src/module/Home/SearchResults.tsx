import React from 'react';
import EmptySlate from 'components/EmptySlate';

interface ISearchResults {
  onOpenModal: (value: string) => void;
  locations: any[];
}

const SearchResults: React.FC<ISearchResults> = ({
  onOpenModal,
  locations,
}) => {
  const handleGetInfo = (location: any) => () => {
    onOpenModal(location);
  };

  return (
    <section className="search-city-results-container">
      <span className="title">Results</span>

      <div className="items">
        {locations.length !== 0 ? (
          locations.map((location: any) => {
            return (
              <button onClick={handleGetInfo(location)} className="item">
                {location.title}
              </button>
            );
          })
        ) : (
          <EmptySlate description="No Locations..." />
        )}
      </div>
    </section>
  );
};

export default SearchResults;
