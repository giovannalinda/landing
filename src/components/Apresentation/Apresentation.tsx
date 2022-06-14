import Link from 'next/link'
import { ImDribbble, ImBehance, ImFacebook, ImTwitter } from 'react-icons/im'

import { Button } from '~/components'

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
          <Link href='#works' scroll>
            <Button variant='white'>VIEW WORK</Button>
          </Link>
        </S.ButtonGroup>
      </S.TextGroup>

      <S.SocialNetworks>
        <small>Follow me on</small>
        <S.SocialNetworksGroup>
          <Link href='https://dribbble.com/giovannalinda' passHref>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
            >
              <ImDribbble size={20} />
            </Button>
          </Link>
          <Link href='https://behance.com' passHref>
            <Button as='a' size='sm' target='_blank' rel='noreferrer'>
              <ImBehance size={20} />
            </Button>
          </Link>
          <Link href='https://facebook.com' passHref>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
            >
              <ImFacebook size={20} />
            </Button>
          </Link>
          <Link href='https://twitter.com/gripada_' passHref>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
            >
              <ImTwitter size={20} />
            </Button>
          </Link>
        </S.SocialNetworksGroup>
      </S.SocialNetworks>
    </S.Container>
  )
}
