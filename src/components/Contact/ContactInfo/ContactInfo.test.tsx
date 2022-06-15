import { render } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('should match snapshot', () => {
    const { container } = render(<ContactInfo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
