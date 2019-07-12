import * as React from 'react';
import SearchCityInput from './SearchCityInput';
import SearchCityResults from './SearchResults';
import LocationInfo from './LocationInfo';

const Home = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleOpenModal = (value: string) => {
    setModalVisible(true);
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

export default Home;
