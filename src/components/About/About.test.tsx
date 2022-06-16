import { render } from '~/__helpers__/app-tests'
import { About } from './About'

describe('Apresentation', () => {
  it('should match snapshot', () => {
    const { container } = render(<About />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
