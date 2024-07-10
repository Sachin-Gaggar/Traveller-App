import React from 'react';
import {render} from '@testing-library/react-native';
import RowText from '../src/components/RowText';
import {TravelPlanType} from '../src/types/itenaryForm';

const mockData: TravelPlanType = {
  place: 'Paris',
  description: 'Eiffel Tower visit',
  image: 'someImageKey',
};

jest.mock('../src/util/imagePath.ts', () => ({
  Images: {
    someImageKey: () => <svg />,
  },
}));

describe('RowText', () => {
  it('renders place and description correctly', () => {
    const {getByText} = render(<RowText data={mockData} />);
    expect(getByText('Paris')).toBeTruthy();
    expect(getByText('Eiffel Tower visit')).toBeTruthy();
  });
});
