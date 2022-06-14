import Image from 'next/image'
import { Assets } from '~/assets'

import * as S from './Footer.styled'

export function Footer() {
  return (
    <S.Footer>
      <S.Separator />
      <Image src={Assets.Logo} width='263' height='59' />
      <small>
        Made with 💜 by John and{' '}
        <a href='https://www.hypesoft.com.br/'>Hypesoft</a>
      </small>
    </S.Footer>
  )
}
