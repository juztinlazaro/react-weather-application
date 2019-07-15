import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import { FAKE_LOCATION_INFO } from 'common/fakeData';
import Loading from 'components/Loading';

import LocationInfo from './index';

configure({ adapter: new EnzymeAdapter() });

describe('LETS NEGATIVE TEST LocationInfo COMPONENT', () => {
  const onCloseModal = sinon.spy();

  const LocationInfoWrapper = shallow(
    <LocationInfo
      location={{}}
      locationInfo={[]}
      isLoading={true}
      visible={true}
      onCloseModal={onCloseModal}
    />,
  );

  it('should render Loading if isLoading is true', () => {
    expect(LocationInfoWrapper.find(Loading)).toHaveLength(1);
  });

  it('should no item render when locationInfo is empty', () => {
    expect(LocationInfoWrapper.find('.item')).toHaveLength(0);
  });
});

describe('LETS POSITIVE TEST LocationInfo COMPONENT', () => {
  const onCloseModal = sinon.spy();

  const LocationInfoWrapper = shallow(
    <LocationInfo
      location={{}}
      locationInfo={FAKE_LOCATION_INFO}
      isLoading={false}
      visible={true}
      onCloseModal={onCloseModal}
    />,
  );

  it('should cant render Loading component when isLoading false', () => {
    expect(LocationInfoWrapper.find(Loading)).toHaveLength(0);
  });

  it('should render item when locationInfo has data', () => {
    expect(LocationInfoWrapper.find('.item')).toHaveLength(6);
  });
});
