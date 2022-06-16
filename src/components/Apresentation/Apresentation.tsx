import Link from 'next/link'
import { motion } from 'framer-motion'
import { ImGithub, ImLinkedin2 } from 'react-icons/im'
import { BsMedium, BsInstagram } from 'react-icons/bs'

import { useTranslation } from '~/lib/useTranslation'
import { Button } from '~/components'

import * as S from './Apresentation.styled'

const TEXT_STATIC_OFFICE = 'Front End Developer.'

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Apresentation() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.TextGroup>
        <h1>
          {t('Hello, I’m Gio,')
            .split('')
            .map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterVariant}
                transition={{
                  delay: index / t('Hello, I’m Gio,').length,
                  duration: 0.2,
                }}
                initial='hidden'
                animate='visible'
              >
                {char}
              </motion.span>
            ))}
          <br />

          {TEXT_STATIC_OFFICE.split('').map((char, index) => (
            <motion.span
              className='purple'
              key={`${char}-${index}`}
              variants={letterVariant}
              transition={{
                delay: index / TEXT_STATIC_OFFICE.length,
                duration: 0.2,
              }}
              initial='hidden'
              animate='visible'
            >
              {char}
            </motion.span>
          ))}
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

        <S.SocialNetworksGroup
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
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
      </S.SocialNetworks>
    </S.Container>
  )
}
