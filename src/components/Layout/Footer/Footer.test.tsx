import { render } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('should match snapshot', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
