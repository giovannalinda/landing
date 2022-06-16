import Link from 'next/link'
import { ImGithub, ImLinkedin2 } from 'react-icons/im'
import { BsMedium, BsInstagram } from 'react-icons/bs'

import { motion } from 'framer-motion'
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
          <motion.div animate={{ scale: [1, 1.2, 1] }}>
            <span>Front End Developer.</span>
          </motion.div>
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

          <Link href='#works'>
            <Button variant='white'>{t('View work')}</Button>
          </Link>
        </S.ButtonGroup>
      </S.TextGroup>

      <S.SocialNetworks>
        <small>{t('Follow me on')}</small>
        <motion.div animate={{ scale: [1, 1.1, 1] }}>
          <S.SocialNetworksGroup>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/giovannalinda'
            >
              <ImGithub size={20} />
            </Button>
            <Button
              as='a'
              size='sm'
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/giovannalinda'
            >
              <ImLinkedin2 size={20} />
            </Button>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/_gripada'
            >
              <BsInstagram size={20} />
            </Button>
            <Button
              as='a'
              size='sm'
              variant='white'
              target='_blank'
              rel='noreferrer'
              href='https://medium.com/@eugiovannasouza'
            >
              <BsMedium size={20} />
            </Button>
          </S.SocialNetworksGroup>
        </motion.div>
      </S.SocialNetworks>
    </S.Container>
  )
}
