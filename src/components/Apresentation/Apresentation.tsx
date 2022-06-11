import { Button } from '../Button'
import { ImDribbble, ImBehance, ImFacebook, ImTwitter } from 'react-icons/im'

import * as S from './Apresentation.styled'

export function Apresentation() {
  return (
    <S.Container>
      <S.TextGroup>
        <h1>
          Hello, I’m John, a <span>Software Engineer.</span>
        </h1>
        <p>
          Product Designer, UI/UX Designer, and developer based in Brazil. Over
          the past 17 years, as an art director and designer, I’ve worked with
          big companies and up-and-coming startups.
        </p>

        <S.ButtonGroup>
          <Button>HIRE ME</Button>
          <Button variant='white'>VIEW WORK</Button>
        </S.ButtonGroup>
      </S.TextGroup>

      <S.SocialNetworks>
        <p>Follow me on</p>
        <Button size='sm' variant='white'>
          <ImDribbble size={20} />
        </Button>
        <Button size='sm'>
          <ImBehance size={20} />
        </Button>
        <Button size='sm' variant='white'>
          <ImFacebook size={20} />
        </Button>
        <Button size='sm' variant='white'>
          <ImTwitter size={20} />
        </Button>
      </S.SocialNetworks>
    </S.Container>
  )
}
