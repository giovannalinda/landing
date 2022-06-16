import { render, screen, userEvent } from '~/__helpers__/app-tests'

import Image from 'next/image'

import { Assets } from '~/assets'
import { WorkCard } from '.'

describe('WorkCard', () => {
  it('should render correctly', async () => {
    render(
      <WorkCard href='https://url.com' title='Eduguard - E-learning Website'>
        <Image src={Assets.ImgWork1} width='424' height='332' />
      </WorkCard>,
    )

    expect(
      await screen.findByText(/Eduguard - E-learning Website/i),
    ).toBeInTheDocument()
    expect(await screen.findByRole('img')).toBeInTheDocument()
  })

  it('should match snapshot', async () => {
    const { container } = render(
      <WorkCard href='https://url.co' title='Eduguard - E-learning Website'>
        <Image src={Assets.ImgWork1} width='424' height='332' />
      </WorkCard>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render 'view project' when user hover button", async () => {
    render(
      <WorkCard href='https://url.co' title='Eduguard - E-learning Website'>
        <Image src={Assets.ImgWork1} width='424' height='332' />
      </WorkCard>,
    )

    userEvent.hover(
      await screen.findByRole('button', {
        name: /Eduguard - E-learning Website/i,
      }),
    )

    expect(await screen.findByText(/View project/i)).toBeInTheDocument()
  })
})
