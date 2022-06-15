import Image from 'next/image'
import { Assets } from '~/assets'
import { CgArrowLongRight } from 'react-icons/cg'

import * as S from './Companies.styled'
import Link from 'next/link'
import { useTranslation } from '~/lib/useTranslation'

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
            <Link href={company.url}>
              <S.CompanyCard target='_blank' rel='noreferrer'>
                <Image src={company.logo} width='113' height='26' />
              </S.CompanyCard>
            </Link>
          </li>
        ))}

        <S.CompanyCard as='li'>
          <CgArrowLongRight size={30} />
        </S.CompanyCard>
      </S.CompaniesList>
    </S.Container>
  )
}
