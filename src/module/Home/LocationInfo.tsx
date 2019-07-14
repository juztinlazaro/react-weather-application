import React from 'react';
import Modal from 'antd/lib/modal';
import Loading from 'components/Loading';

interface ILocationInfo {
  visible: boolean;
  location: any;
  isLoading: boolean;
  onCloseModal: () => void;
}

const LocationInfo: React.FC<ILocationInfo> = ({
  location,
  visible,
  onCloseModal,
  isLoading,
}) => {
  console.log(location);
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
            <div className="item">item</div>
            <div className="item">item</div>
            <div className="item">item</div>
          </div>
        )}
      </section>
    </Modal>
  );
};

export default LocationInfo;
