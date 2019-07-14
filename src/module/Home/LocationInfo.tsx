import React from 'react';
import Modal from 'antd/lib/modal';
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
                    {loc.created}
                    {loc.min_temp}
                    {loc.max_temp}
                    {loc.weather_state_name}
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
