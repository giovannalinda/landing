import { useTranslation } from '~/lib/useTranslation'

import * as S from './TestimonialCard.styled'

export type TestimonialCardProps = {
  name: string
  office: string
  company: string
}

export function TestimonialCard({
  name,
  office,
  company,
}: TestimonialCardProps) {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.TestimonialProfile />

      <S.TestimonialClient>
        <h3>{name}</h3>
        <small aria-label={`${office} of ${company}`}>
          {office} {t('of')} <span>{company}</span>
        </small>
      </S.TestimonialClient>
    </S.Container>
  )
}
