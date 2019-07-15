import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import { FAKE_LOCATIONS } from 'common/fakeData';
import SearchCityResult from './index';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST TABLE BOX COMPONENT', () => {
  let SearchCityResultWrapper: any;

  const onOpenModal = sinon.spy();

  beforeEach(() => {
    SearchCityResultWrapper = shallow(
      <SearchCityResult onOpenModal={onOpenModal} locations={FAKE_LOCATIONS} />,
    );
  });

  it('should render 11 location item', () => {
    expect(SearchCityResultWrapper.find('.item')).toHaveLength(11);
  });
});
