import React from 'react';
import Input from 'antd/lib/input';

const { Search } = Input;

interface ISearchCityInput {
  onSearchLocation: (event: any) => void;
}

const SearchCityInput: React.FC<ISearchCityInput> = ({ onSearchLocation }) => {
  let debounce: any = null;

  const handleChange = (event: React.BaseSyntheticEvent) => {
    clearTimeout(debounce);

    const location = event.target.value;

    debounce = setTimeout(() => {
      if (location) {
        onSearchLocation(location);
      }
    }, 1000);
  };

  return (
    <section className="search-city-input-container _spacer">
      <span className="title">Enter a city name</span>

      <Search
        className="search-input"
        placeholder="Search country..."
        onSearch={onSearchLocation}
        onChange={handleChange}
      />
    </section>
  );
};

export default SearchCityInput;
