import { render } from '~/__helpers__/app-tests'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('should match snapshot', () => {
    const { container } = render(<ContactInfo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
