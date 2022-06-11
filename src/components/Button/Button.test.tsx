import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should renders correctly', async () => {
    render(<Button>Example</Button>)

    expect(
      await screen.findByRole('button', {
        name: /Example/i,
      }),
    ).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Button>Example</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
