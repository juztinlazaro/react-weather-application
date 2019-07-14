import * as React from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps } from './connect';

import SearchCityInput from './SearchCityInput';
import SearchCityResults from './SearchResults';
import LocationInfo from './LocationInfo';

interface IHome {
  getWeatherLocationsEpics: any;
}

const Home: React.FC<IHome> = ({ getWeatherLocationsEpics }) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleOpenModal = (value: string) => {
    setModalVisible(true);
    console.log('value', value);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSearchLocation = (location: string) => {
    getWeatherLocationsEpics({ location });
  };

  return (
    <section className="home-section">
      <div className="weather-container">
        <div className="header-wrapper">
          <span className="title">Simple Weather Application</span>
        </div>

        <div className="body-wrapper">
          <SearchCityInput onSearchLocation={handleSearchLocation} />

          <SearchCityResults onOpenModal={handleOpenModal} />

          {isModalVisible && (
            <LocationInfo
              visible={isModalVisible}
              onCloseModal={handleCloseModal}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(Home);
