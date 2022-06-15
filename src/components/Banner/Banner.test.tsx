import { render } from '~/__helpers__/app-tests'
import { Banner } from './Banner'

describe('Banner', () => {
  it('should match snapshot', () => {
    const { container } = render(<Banner />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
