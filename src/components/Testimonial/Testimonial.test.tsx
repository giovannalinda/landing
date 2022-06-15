import { render } from '~/__helpers__/app-tests'

import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('should match snapshot', () => {
    const { container } = render(<Testimonial />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
