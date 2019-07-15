import React from 'react';

import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import { FAKE_LOCATIONS } from 'common/fakeData';
import EmptySlate from 'components/EmptySlate';

import SearchCityResult from './index';

configure({ adapter: new EnzymeAdapter() });

describe('LETS TEST SearchCityResult COMPONENT', () => {
  const onOpenModal = sinon.spy();

  it('should render 11 location item', () => {
    const SearchCityResultWrapper = shallow(
      <SearchCityResult onOpenModal={onOpenModal} locations={FAKE_LOCATIONS} />,
    );
    expect(SearchCityResultWrapper.find('.item')).toHaveLength(11);
  });

  it('should not render location item', () => {
    const SearchCityResultWrapper = shallow(
      <SearchCityResult onOpenModal={onOpenModal} locations={[]} />,
    );
    expect(SearchCityResultWrapper.find('.item')).toHaveLength(0);
  });

  it('should not render EmptySlate', () => {
    const SearchCityResultWrapper = shallow(
      <SearchCityResult onOpenModal={onOpenModal} locations={[]} />,
    );
    expect(SearchCityResultWrapper.find(EmptySlate)).toHaveLength(1);
  });
});
