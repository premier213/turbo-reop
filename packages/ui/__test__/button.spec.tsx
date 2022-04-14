import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@ui/components/button/button'
import '@testing-library/jest-dom'

describe('tests', () => {
  it('should', () => {
    render(<Button />)
    expect(screen.getByText('BTN5')).toBeInTheDocument()
  })
})
