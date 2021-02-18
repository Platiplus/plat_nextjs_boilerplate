import { render, screen } from '@testing-library/react'

import Home from './'

describe('<Home />', () => {
  it('deve renderizar a header', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /plat boilerplate/i })).toBeInTheDocument()
  })
})
