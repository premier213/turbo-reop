import React from 'react'
import { render, screen } from '@testing-library/react'
import HelloWorld from '@front/components/HelloWorld'
import '@testing-library/jest-dom'

global.React = React as any

describe('tests', () => {
  it('should', () => {
    render(<HelloWorld />)
    expect(screen.getByText('BTN5')).toBeInTheDocument()
  })
})
