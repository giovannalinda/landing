import { CgArrowLongRight } from 'react-icons/cg'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

import { Assets } from '~/assets'
import { useTranslation } from '~/lib/useTranslation'

import * as S from './About.styled'

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export function About() {
  const { t } = useTranslation()

  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <S.Container id='about' ref={ref}>
      {inView && (
        <>
          <S.AboutImageWrapper
            variants={leftVariant}
            initial='hidden'
            animate='visible'
          >
            <Image src={Assets.About} layout='raw' width='592' height='574' />
          </S.AboutImageWrapper>
          <S.Content variants={rightVariant} initial='hidden' animate='visible'>
            <h1>
              {t('Developing quality digital products through codes.')} ✨
            </h1>
            <p>
              {t(
                "I'm a front end developer with a sparkle in the eyes who's always looking for the next level and who writes about technology to contribute to the community. Some of my goals are to have continuous growth, boost people through education and build good quality interfaces.",
              )}
            </p>

            <S.Carrer>
              <S.CarrerItem>
                <h3>1+</h3>
                <span>{t('Years of Experience')}</span>
              </S.CarrerItem>
              <S.CarrerItem>
                <h3>28+</h3>
                <span>{t('Completed Projects')}</span>
              </S.CarrerItem>
            </S.Carrer>
            <Link href='mailto:eugiovannasouza@gmail.com'>
              <S.SayHelloButton variant='purple' size='md' rounded={false}>
                {t('Say hi').toUpperCase()} <CgArrowLongRight size={24} />
              </S.SayHelloButton>
            </Link>
          </S.Content>
        </>
      )}
    </S.Container>
  )
}
