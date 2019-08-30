import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react'
import TechList from '../../components/TechList'

describe('TechList Component', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('render correctly', () => {
    const { getByTestId } = render(<TechList />)

    expect(getByTestId('container')).toBeTruthy()
  })

  it('should be able to add new tech', () => {
    const { getByTestId, getByText } = render(<TechList />)

    const form = getByTestId('form')
    const techInput = getByTestId('tech-input')

    fireEvent.change(techInput, { target: { value: 'Node.js' }})
    fireEvent.submit(form)

    const list = getByTestId('list')
    expect(list).toContainElement(getByText('Node.js'))
    expect(techInput).toHaveValue('')
  })

  it('should store techs in storage', () => {
    let { getByTestId, getByText } = render(<TechList />)

    const form = getByTestId('form')
    const techInput = getByTestId('tech-input')

    fireEvent.change(techInput, { target: { value: 'Node.js' }})
    fireEvent.submit(form)

    cleanup();

    ({ getByTestId, getByText } = render(<TechList />))

    const list = getByTestId('list')
    expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']))
    expect(list).toContainElement(getByText('Node.js'))

  })
})