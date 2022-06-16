import Link from 'next/link'
import { useTranslation } from '~/lib/useTranslation'

import { LocaleSelect } from './LocaleSelect'

import * as S from './Header.styled'

export function Header() {
  const { t } = useTranslation()

  return (
    <S.Header>
      <LocaleSelect />
      <S.Navigation>
        <ul>
          <li>
            <Link href='#about'>{t('About').toUpperCase()}</Link>
          </li>
          <li>
            <Link href='#services'>{t('Services').toUpperCase()}</Link>
          </li>
          <li>
            <Link href='#works'>{t('Works').toUpperCase()}</Link>
          </li>
          <li>
            <Link href='#contact'>{t('Contact').toUpperCase()}</Link>
          </li>
        </ul>
      </S.Navigation>
    </S.Header>
  )
}
