import { render } from '~/__helpers__/app-tests'
import { Contact } from './Contact'

describe('Contact', () => {
  it('should match snapshot', () => {
    const { container } = render(<Contact />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
