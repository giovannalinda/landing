import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { CgArrowLongRight } from 'react-icons/cg'

import { Assets } from '~/assets'
import { useTranslation } from '~/lib/useTranslation'

import * as S from './Companies.styled'

const companies = [
  {
    name: 'YouTube',
    logo: Assets.LogoYoutube,
    url: 'https://youtube.com',
  },
  {
    name: 'Google',
    logo: Assets.LogoGoogle,
    url: 'https://google.com',
  },
  {
    name: 'Adobe',
    logo: Assets.LogoAdobe,
    url: 'https://adobe.com',
  },
  {
    name: 'Sketch',
    logo: Assets.LogoSketch,
    url: 'https://sketch.com',
  },
]

const cardVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export function Companies() {
  const { t } = useTranslation()
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <S.Container ref={ref}>
      <h1>
        {`${t('I worked with')} `}
        <span>289+</span> {t('Companies all over the World.')}
      </h1>

      <S.CompaniesList>
        {inView &&
          companies.map((company, index) => (
            <li key={company.name} aria-label={company.name}>
              <S.CompanyCard
                target='_blank'
                rel='noreferrer'
                href={company.url}
                initial='hidden'
                animate='visible'
                variants={cardVariant}
                transition={{
                  duration: 0.5,
                  delay: index / companies.length,
                }}
              >
                <Image src={company.logo} width='113' height='26' />
              </S.CompanyCard>
            </li>
          ))}

        <li>
          <S.CompanyCard
            href='https://www.linkedin.com/in/giovannalinda'
            target='_blank'
            rel='noreferrer'
            initial='hidden'
            animate='visible'
            variants={cardVariant}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            <CgArrowLongRight size={30} />
          </S.CompanyCard>
        </li>
      </S.CompaniesList>
    </S.Container>
  )
}
