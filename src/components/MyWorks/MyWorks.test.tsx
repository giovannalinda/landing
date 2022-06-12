import { render } from '@testing-library/react'

import { MyWorks } from './MyWorks'

describe('MyWorks', () => {
  it('should match snapshot', () => {
    const { container } = render(<MyWorks />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
