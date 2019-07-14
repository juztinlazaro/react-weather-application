import React from 'react';
import { connect } from 'react-redux';
import Notification from 'antd/lib/notification';
import Icon from 'antd/lib/icon';
import Loading from 'components/Loading';

import { mapDispatchToProps, mapStateToProps } from './connect';

import SearchCityInput from './SearchCityInput';
import SearchCityResults from './SearchResults';
import LocationInfo from './LocationInfo';

interface IHome {
  hasError: boolean;
  getWeatherLocationsEpics: (payload: { location: string }) => void;
  getWeatherLocationsInfoEpics: (payload: { woeid: string }) => void;
  isLoading: boolean;
  locations: any[];
}

const Home: React.FC<IHome> = ({
  getWeatherLocationsEpics,
  getWeatherLocationsInfoEpics,
  locations,
  isLoading,
  hasError,
}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [selectedLocation, setSelectedLocation] = React.useState({});

  React.useEffect(() => {
    if (hasError) {
      Notification.error({
        description: 'something went wrong, please try again later.',
        icon: <Icon type="smile" className="notification-error-icon" />,
        message: 'Something went wrong',
        placement: 'bottomRight',
      });
      setModalVisible(false);
    }
  }, [hasError]);

  const handleOpenModal = (location: any) => {
    setSelectedLocation(location);
    getWeatherLocationsInfoEpics({
      woeid: location.woeid,
    });

    setModalVisible(true);
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
          <span className="title">
            Simple Weather Application -<small>v1</small>
          </span>
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
              location={selectedLocation}
              onCloseModal={handleCloseModal}
              isLoading={isLoading}
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
