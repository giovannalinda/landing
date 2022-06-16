import { render } from '~/__helpers__/app-tests'

import { MyService } from './MyService'

describe('MyService', () => {
  it('should match snapshot', () => {
    const { container } = render(<MyService />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
