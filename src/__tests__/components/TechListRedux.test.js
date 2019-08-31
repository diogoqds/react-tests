import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux'
import TechListRedux from '../../components/TechListRedux';

jest.mock('react-redux')

describe('TechListRedux component', () => {
  it('should render techs', () => {

    useSelector.mockImplementation(cb => cb({
      techs: ['React', 'React Native']
    }))

    const { getByTestId, getByText } = render(<TechListRedux />)
    const list = getByTestId('list');

    expect(list).toContainElement(getByText('React'))
    expect(list).toContainElement(getByText('React Native'))
  })
})