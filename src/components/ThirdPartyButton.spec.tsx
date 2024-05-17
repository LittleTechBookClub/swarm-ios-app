/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import ThirdPartyButton from './ThirdPartyButton';

describe('ThirdPartyButton', () => {
  it('should render the Third Party Button', () => {
    const tree = render(<ThirdPartyButton imgSrc="test" handleClick={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
