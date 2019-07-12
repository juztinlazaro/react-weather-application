import React from 'react';
import Input from 'antd/lib/input';

const { Search } = Input;

const SearchCityInput = () => {
  return (
    <section className="search-city-input-container _spacer">
      <span className="title">Enter a city name</span>

      <Search
        className="search-input"
        placeholder="Search country..."
        onSearch={value => console.log(value)}
      />
    </section>
  );
};

export default SearchCityInput;
