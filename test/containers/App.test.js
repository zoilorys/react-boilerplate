import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/containers/App';

const getInstance = () => shallow(<App />);

describe('<App />', () => {
  test('renders', () => {
    const instance = getInstance();

    expect(instance).toBeTruthy();
    expect(instance.text()).toEqual('test');
  });
});
