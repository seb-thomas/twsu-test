import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../src/components/App';
import Scale from '../src/components/Scale';
import { Wrapper, Input, H1, H2 } from '../src/styles/app';

App.__Rewire__('SVGImport', () => <p>SVGPlaceholder</p>);
Scale.__Rewire__('SVGImport', () => <p>SVGPlaceholder</p>);

describe('<App/>', function () {
  // Component
  const wrapper = shallow(<App />);

  // Tests
  it('should exist', function () {
    expect(wrapper).to.have.length(1);
  });

  it('should render one <Scale /> component', function () {
    expect(wrapper.find(Scale)).to.have.length(1);
  });

  it('should render one <Input /> component', function () {
    expect(wrapper.find(Input)).to.have.length(1);
  });

  it('should have a state of `value`, with `Type your happy or sad text here!`', function () {
    expect(wrapper.state('value')).to.equal('Type your happy or sad text here!');
  });

  it('should have a state of `thesauarus`, with an empty object', function () {
    const stateThesauarus = wrapper.state('thesauarus');
    const expected = Object.keys({}).length === 0 && {}.constructor === Object;
    const actual = Object.keys(stateThesauarus).length === 0 && stateThesauarus.constructor === Object;

    expect(expected).to.equal(actual);
  });
});