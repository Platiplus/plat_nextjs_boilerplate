import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('<Home />', () => {
  it('deve renderizar a header', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /boilerplate/i })).toBeInTheDocument()
  })

  it('deve renderizar cores corretamente', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
