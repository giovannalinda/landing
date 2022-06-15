import Image from 'next/image'
import Link from 'next/link'
import { Assets } from '~/assets'
import { useTranslation } from '~/lib/useTranslation'

import * as S from './Footer.styled'

export function Footer() {
  const { t } = useTranslation()

  return (
    <S.Footer>
      <S.Separator />
      <Image src={Assets.Logo} width='263' height='59' />
      <small>
        {t('Made with')} 💜 {t('by Giovanna and ')}
        <Link href='https://www.hypesoft.com.br/' passHref>
          <a target='_blank' rel='noreferrer'>
            Hypesoft
          </a>
        </Link>
      </small>
    </S.Footer>
  )
}
