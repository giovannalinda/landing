import Link from 'next/link'
import { ImGithub, ImLinkedin2 } from 'react-icons/im'
import { BsMedium, BsInstagram } from 'react-icons/bs'

import { useTranslation } from '~/lib/useTranslation'
import { Button } from '~/components'

import * as S from './Apresentation.styled'

export function Apresentation() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.TextGroup>
        <h1>
          {t('Hello, I’m Gio,')}
          <br />
          <span>Front End Developer.</span>
        </h1>
        <p>
          {t(
            "A Front End Developer with a sparkle in her eye, who cares about every detail when building interfaces valuing the experience so that it positively impacts people's lives.",
          )}
        </p>

        <S.ButtonGroup>
          <Link href='mailto:eugiovannasouza@gmail.com'>
            <Button>{t('Hire me')}</Button>
          </Link>
          <Link href='#works' scroll>
            <Button variant='white'>{t('View work')}</Button>
          </Link>
        </S.ButtonGroup>
      </S.TextGroup>

      <S.SocialNetworks>
        <small>{t('Follow me on')}</small>
        <S.SocialNetworksGroup>
          <Link href='https://github.com/giovannalinda' passHref>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
            >
              <ImGithub size={20} />
            </Button>
          </Link>
          <Link href='https://www.linkedin.com/in/giovannalinda' passHref>
            <Button as='a' size='sm' target='_blank' rel='noreferrer'>
              <ImLinkedin2 size={20} />
            </Button>
          </Link>
          <Link href='https://www.instagram.com/_gripada' passHref>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
            >
              <BsInstagram size={20} />
            </Button>
          </Link>
          <Link href='https://medium.com/@eugiovannasouza' passHref>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
            >
              <BsMedium size={20} />
            </Button>
          </Link>
        </S.SocialNetworksGroup>
      </S.SocialNetworks>
    </S.Container>
  )
}
