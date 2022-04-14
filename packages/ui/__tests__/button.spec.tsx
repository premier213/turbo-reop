import { render, screen } from '@testing-library/react'
import { Button } from '@src/components/button/button'
import '@testing-library/jest-dom'

describe('tests', () => {
  it('should', () => {
    render(<Button />)
    expect(screen.getByText('BTN5')).toBeInTheDocument()
  })
})
