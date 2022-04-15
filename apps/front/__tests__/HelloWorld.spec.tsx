import { render, screen } from '@testing-library/react'
import HelloWorld from '@src/components/HelloWorld'
import '@testing-library/jest-dom'

describe('tests', () => {
  it('should', () => {
    render(<HelloWorld value="name" />)
    expect(screen.getByText('BTN5')).toBeInTheDocument()
  })
})
