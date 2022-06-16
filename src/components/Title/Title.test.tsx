import { render, screen } from '~/__helpers__/app-tests'
import { Title } from '.'

describe('Title', () => {
  it('should render correctly', async () => {
    render(<Title>Example</Title>)

    expect(await screen.findByText(/Example/i)).toBeInTheDocument()
  })

  it('should match snapshot', async () => {
    const { container } = render(<Title>Example</Title>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
