import { render } from '~/__helpers__/app-tests'
import { Apresentation } from './Apresentation'

describe('Apresentation', () => {
  it('should match snapshot', () => {
    const { container } = render(<Apresentation />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
