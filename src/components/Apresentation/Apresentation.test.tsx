import { render } from '@testing-library/react'
import { Apresentation } from './Apresentation'

describe('Apresentation', () => {
  it('should match snapshot', () => {
    const { container } = render(<Apresentation />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
