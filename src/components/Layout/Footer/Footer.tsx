import Image from 'next/image'

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
        <a target='_blank' rel='noreferrer' href='https://www.hypesoft.com.br/'>
          Hypesoft
        </a>
      </small>
    </S.Footer>
  )
}
