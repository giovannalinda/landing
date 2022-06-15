import { render } from '~/__helpers__/app-tests'
import { Footer } from './Footer'

describe('Footer', () => {
  it('should match snapshot', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
