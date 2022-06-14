import { render, screen } from '@testing-library/react'
import { TestimonialCard } from './TestimonialCard'

describe('TestimonialCard', () => {
  it('should render correctly', async () => {
    render(
      <TestimonialCard
        name='Sundar Pichai'
        company='Google'
        office='CEO e Founder'
      />,
    )

    expect(await screen.findByText(/Sundar Pichai/i)).toBeInTheDocument()
    expect(
      await screen.findByLabelText(/CEO e Founder of Google/i),
    ).toBeInTheDocument()
  })
})
