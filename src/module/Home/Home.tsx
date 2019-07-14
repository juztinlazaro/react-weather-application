import React from 'react';
import { connect } from 'react-redux';
import Loading from 'components/Loading';

import { mapDispatchToProps, mapStateToProps } from './connect';

import SearchCityInput from './SearchCityInput';
import SearchCityResults from './SearchResults';
import LocationInfo from './LocationInfo';

interface IHome {
  getWeatherLocationsEpics: any;
  isLoading: boolean;
  locations: any[];
}

const Home: React.FC<IHome> = ({
  getWeatherLocationsEpics,
  locations,
  isLoading,
}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleOpenModal = (value: any) => {
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

          {isLoading ? (
            <Loading tip="Searching for locations...." />
          ) : (
            <SearchCityResults
              onOpenModal={handleOpenModal}
              locations={locations}
            />
          )}

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
  mapStateToProps,
  mapDispatchToProps,
)(Home);
