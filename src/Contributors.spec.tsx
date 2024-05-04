/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import Contributors from './Contributors';

describe('Contributors', () => {
    it('should render the correct number of contributors', () => {
        const contributors = 3;
        const { getAllByLabelText } = render(<Contributors />);
        const contributorElements = getAllByLabelText('Contributor');
        expect(contributorElements.length).toBe(contributors);
    });
});
