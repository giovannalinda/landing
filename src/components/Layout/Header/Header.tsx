import Link from 'next/link'
import { useTranslation } from '~/lib/useTranslation'

import * as S from './Header.styled'

export function Header() {
  const { t } = useTranslation()

  return (
    <S.Header>
      <S.Navigation>
        <ul>
          <li>
            <Link href='#about' scroll>
              {t('About').toUpperCase()}
            </Link>
          </li>
          <li>
            <Link href='#services' scroll>
              {t('Services').toUpperCase()}
            </Link>
          </li>
          <li>
            <Link href='#works' scroll>
              {t('Works').toUpperCase()}
            </Link>
          </li>
          <li>
            <Link href='#contact' scroll>
              {t('Contact').toUpperCase()}
            </Link>
          </li>
        </ul>
      </S.Navigation>
    </S.Header>
  )
}
