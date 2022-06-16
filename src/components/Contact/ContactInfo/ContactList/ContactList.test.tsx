import { render } from '~/__helpers__/app-tests'
import { ContactList } from './ContactList'

describe('ContactList', () => {
  it('should match snapshot', () => {
    const { container } = render(<ContactList />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
