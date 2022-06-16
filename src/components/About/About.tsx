import { CgArrowLongRight } from 'react-icons/cg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Assets } from '~/assets'
import { useTranslation } from '~/lib/useTranslation'

import * as S from './About.styled'

export function About() {
  const { t } = useTranslation()

  return (
    <S.Container id='about'>
      <S.AboutImageWrapper>
        <Image src={Assets.About} layout='raw' width='592' height='574' />
      </S.AboutImageWrapper>
      <S.Content>
        <h1>{t('Developing quality digital products through codes.')} ✨</h1>
        <p>
          {t(
            "I'm a front end developer with a sparkle in the eyes who's always looking for the next level and who writes about technology to contribute to the community. Some of my goals are to have continuous growth, boost people through education and build good quality interfaces.",
          )}
        </p>

        <S.Carrer>
          <S.CarrerItem>
            <motion.div animate={{ scale: [1, 1.3, 1.3, 1] }}>
              <h3>1+</h3>
            </motion.div>
            <span>{t('Years of Experience')}</span>
          </S.CarrerItem>
          <S.CarrerItem>
            <motion.div animate={{ scale: [1, 1.3, 1.3, 1] }}>
              <h3>28+</h3>
            </motion.div>
            <span>{t('Completed Projects')}</span>
          </S.CarrerItem>
        </S.Carrer>
        <Link href='mailto:eugiovannasouza@gmail.com'>
          <S.SayHelloButton variant='purple' size='md' rounded={false}>
            {t('Say hi').toUpperCase()} <CgArrowLongRight size={24} />
          </S.SayHelloButton>
        </Link>
      </S.Content>
    </S.Container>
  )
}
