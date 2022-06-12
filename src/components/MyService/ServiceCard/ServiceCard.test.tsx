import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FiCode } from 'react-icons/fi'
import { ServiceCard } from '.'

describe('ServiceCard', () => {
  it('should render correctly', async () => {
    render(
      <ServiceCard title='Front End Development'>
        <FiCode aria-label='code icon' size={40} strokeWidth={1} />
      </ServiceCard>,
    )

    expect(
      await screen.findByText(/Front End Development/i),
    ).toBeInTheDocument()
    expect(await screen.findByLabelText(/code icon/i)).toBeInTheDocument()
  })

  it('should match snapshot', async () => {
    const { container } = render(
      <ServiceCard title='Front End Development'>
        <FiCode size={40} strokeWidth={1} />
      </ServiceCard>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render 'discuss now' when user hover button", async () => {
    render(
      <ServiceCard title='Front End Development'>
        <FiCode aria-label='code icon' size={40} strokeWidth={1} />
      </ServiceCard>,
    )

    userEvent.hover(
      await screen.findByRole('button', {
        name: /Front End Development/i,
      }),
    )

    expect(await screen.findByText(/Discuss now/i)).toBeInTheDocument()
  })
})
