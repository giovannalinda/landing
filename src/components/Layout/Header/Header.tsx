import Link from 'next/link'
import * as S from './Header.styled'

export function Header() {
  return (
    <S.Header>
      <S.Navigation>
        <ul>
          <li>
            <Link href='#about' scroll>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href='#services' scroll>
              SERVICES
            </Link>
          </li>
          <li>
            <Link href='#works' scroll>
              WORKS
            </Link>
          </li>
          <li>
            <Link href='#contact' scroll>
              CONTACT
            </Link>
          </li>
        </ul>
      </S.Navigation>
    </S.Header>
  )
}
