import React from 'react';

interface ISearchResults {
  onOpenModal: (value: string) => void;
}

const SearchResults: React.FC<ISearchResults> = ({ onOpenModal }) => {
  const handleGetInfo = () => {
    onOpenModal('something');
  };
  return (
    <section className="search-city-results-container">
      <span className="title">Results</span>

      <div className="items">
        <button onClick={handleGetInfo} className="item">
          Country
        </button>
        <button className="item">Country</button>
        <button className="item">Country</button>
        <button className="item">Country</button>
      </div>
    </section>
  );
};

export default SearchResults;
