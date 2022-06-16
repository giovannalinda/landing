import { render, screen, userEvent } from '~/__helpers__/app-tests'
import { LocaleSelect } from './LocaleSelect'

describe('LocaleSelect', () => {
  it('should match snapshot', () => {
    const { container } = render(<LocaleSelect />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should open list', async () => {
    render(<LocaleSelect />)

    userEvent.click(
      await screen.findByRole('button', {
        name: 'locale select',
      }),
    )

    expect(
      await screen.findByRole('list', {
        name: 'select list',
      }),
    ).toBeInTheDocument()
  })
})
