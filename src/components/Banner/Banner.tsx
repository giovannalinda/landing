import { CgArrowLongRight } from 'react-icons/cg'
import { useTranslation } from '~/lib/useTranslation'

import * as S from './Banner.styled'

export function Banner() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.TextGroup>
        <p>
          {`${t("Got a project in mind? Let's make something awesome")} `}
          <span>{t('together')}</span>.
        </p>
      </S.TextGroup>
      <S.HireMeButton variant='purple' size='md' rounded={false}>
        {t('Hire me')} <CgArrowLongRight size={20} />
      </S.HireMeButton>
    </S.Container>
  )
}
