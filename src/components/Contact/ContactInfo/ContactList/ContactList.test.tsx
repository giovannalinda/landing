import { render } from '@testing-library/react'
import { ContactList } from './ContactList'

describe('ContactList', () => {
  it('should match snapshot', () => {
    const { container } = render(<ContactList />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
