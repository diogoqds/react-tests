import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux'
import TechListRedux from '../../components/TechListRedux';
import { addTech } from '../../redux/actions/tech';

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

  it('should be able to add new tech', () => {
    const { getByTestId } = render(<TechListRedux />)
    const form = getByTestId('form')
    const techInput = getByTestId('tech-input')

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(techInput, { target: { value: 'Node.js' }})
    fireEvent.submit(form)


    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'))
  })
})