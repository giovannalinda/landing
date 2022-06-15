import { render } from '~/__helpers__/app-tests'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('should match snapshot', () => {
    const { container } = render(<ContactForm />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
