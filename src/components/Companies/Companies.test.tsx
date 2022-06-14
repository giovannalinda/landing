import { render } from '@testing-library/react'
import { Companies } from './Companies'

describe('Companies', () => {
  it('should match snapshot', () => {
    const { container } = render(<Companies />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
