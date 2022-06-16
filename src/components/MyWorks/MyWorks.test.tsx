import { render } from '~/__helpers__/app-tests'

import { MyWorks } from './MyWorks'

describe('MyWorks', () => {
  it('should match snapshot', () => {
    const { container } = render(<MyWorks />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
