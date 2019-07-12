import React from 'react';
import Modal from 'antd/lib/modal';

interface ILocationInfo {
  visible: boolean;
  onCloseModal: () => void;
}

const LocationInfo: React.FC<ILocationInfo> = ({ visible, onCloseModal }) => {
  return (
    <Modal
      title="Basic Modal"
      className="location-info-modal"
      visible={visible}
      onCancel={onCloseModal}
      footer={null}
      getContainer={() => document.querySelector('.home-section')}
    >
      <section className="location-info-container">
        <div className="items">
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
        </div>
      </section>
    </Modal>
  );
};

export default LocationInfo;
