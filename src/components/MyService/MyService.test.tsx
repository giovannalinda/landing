import { render } from '@testing-library/react'

import { MyService } from './MyService'

describe('MyService', () => {
  it('should match snapshot', () => {
    const { container } = render(<MyService />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
