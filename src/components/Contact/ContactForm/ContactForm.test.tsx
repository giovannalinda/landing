import { render } from '@testing-library/react'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('should match snapshot', () => {
    const { container } = render(<ContactForm />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
