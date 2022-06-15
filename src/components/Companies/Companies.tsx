import Image from 'next/image'
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

export function Companies() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <h1>
        {`${t('I worked with')} `}
        <span>289+</span> {t('Companies all over the World.')}
      </h1>

      <S.CompaniesList>
        {companies.map((company) => (
          <li key={company.name} aria-label={company.name}>
            <S.CompanyCard target='_blank' rel='noreferrer' href={company.url}>
              <Image src={company.logo} width='113' height='26' />
            </S.CompanyCard>
          </li>
        ))}

        <S.CompanyCard as='li'>
          <CgArrowLongRight size={30} />
        </S.CompanyCard>
      </S.CompaniesList>
    </S.Container>
  )
}
