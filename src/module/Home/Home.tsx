import * as React from 'react';
import { connect } from 'react-redux';
import { getWeatherLocationsEpics } from 'store/home/actions';

import SearchCityInput from './SearchCityInput';
import SearchCityResults from './SearchResults';
import LocationInfo from './LocationInfo';

interface IHome {
  getWeatherLocationsEpics: any;
}

const Home: React.FC<IHome> = ({ getWeatherLocationsEpics: onGet }) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleOpenModal = (value: string) => {
    setModalVisible(true);
    onGet({ location: 'san' });
    console.log('value', value);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="home-section">
      <div className="weather-container">
        <div className="header-wrapper">
          <span className="title">Simple Weather Application</span>
        </div>

        <div className="body-wrapper">
          <SearchCityInput />

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
  {
    getWeatherLocationsEpics,
  },
)(Home);
