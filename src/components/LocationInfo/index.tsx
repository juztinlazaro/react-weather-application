import React from 'react';
import Modal from 'antd/lib/modal';
import moment from 'moment';
import Loading from 'components/Loading';

interface ILocationInfo {
  visible: boolean;
  location: any;
  locationInfo: any;
  isLoading: boolean;
  onCloseModal: () => void;
}

const LocationInfo: React.FC<ILocationInfo> = ({
  location,
  locationInfo,
  visible,
  onCloseModal,
  isLoading,
}) => {
  const { consolidated_weather } = locationInfo;
  return (
    <Modal
      title={location.title}
      className="location-info-modal"
      visible={visible}
      onCancel={onCloseModal}
      footer={null}
      getContainer={() => document.querySelector('.home-section')}
    >
      <section className="location-info-container">
        {isLoading ? (
          <Loading tip="Searching for locations...." />
        ) : (
          <div className="items">
            {consolidated_weather &&
              consolidated_weather.map((loc: any) => {
                return (
                  <div key={loc.id} className="item">
                    <div className="info-wrapper">
                      <span className="date">
                        {moment(loc.created).format('YYYY-MM-DD')}
                      </span>

                      <span className="weather"> {loc.weather_state_name}</span>
                    </div>

                    <div className="info-wrapper">
                      <span className="weather-min-temp">
                        {loc.min_temp.toFixed(2)}
                        <sup> &#8451; </sup>
                      </span>
                      <span className="temp-label">Min</span>
                    </div>

                    <div className="info-wrapper">
                      <span className="weather-max-temp">
                        {loc.max_temp.toFixed(2)}
                        <sup> &#8451; </sup>
                      </span>
                      <span className="temp-label">Max</span>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </section>
    </Modal>
  );
};

export default LocationInfo;
