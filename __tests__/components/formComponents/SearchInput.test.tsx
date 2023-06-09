import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchInput from '@/components/formComponents/SearchInput'

describe('search input', () => {
  it('should render input properly', () => {
    render(
      <SearchInput
        onChange={() => {}}
        value=''
        name='search'
        type='text'
        handleClick={() => {}}
      />
    )
    const input = screen.getByPlaceholderText('search city or city,country')
    expect(input).toHaveAttribute('placeholder', 'search city or city,country')
  })
})

describe('search input', () => {
  it('should render button properly', () => {
    render(
      <SearchInput
        onChange={() => {}}
        value=''
        name='search'
        type='text'
        handleClick={() => {}}
      />
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
