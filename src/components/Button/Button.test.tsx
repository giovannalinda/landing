import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('Button', () => {
  it('should renders correctly', async () => {
    render(<Button>Example</Button>)

    expect(
      await screen.findByRole('button', {
        name: /Example/i,
      }),
    ).toBeInTheDocument()

    userEvent.hover(
      await screen.findByRole('button', {
        name: /Example/i,
      }),
    )

    expect(await screen.findByText(/Example/i)).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Button>Example</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
