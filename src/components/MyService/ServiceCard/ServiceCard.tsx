import Link from 'next/link'
import { ReactNode } from 'react'

import { Button, useButtonAnimation } from '~/components'
import { useTranslation } from '~/lib/useTranslation'

import * as S from './ServiceCard.styled'

export type ServiceCardProps = {
  children: ReactNode
  title: string
  delay?: number
}

const cardVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export function ServiceCard({
  children,
  title,
  delay = 0.3,
}: ServiceCardProps) {
  const { t } = useTranslation()
  const { isButtonTextVisible, showButtonText, hiddenButtonText } =
    useButtonAnimation()

  return (
    <S.Container
      aria-label={title}
      onMouseEnter={showButtonText}
      onMouseLeave={hiddenButtonText}
      onFocus={showButtonText}
      onBlur={hiddenButtonText}
      initial='hidden'
      animate='visible'
      variants={cardVariant}
      transition={{
        duration: 0.5,
        delay,
      }}
    >
      {children}

      <S.TextGroup>
        {title}
        <S.Separator />
        <Button.Animation visible={isButtonTextVisible}>
          <Link href='mailto:eugiovannasouza@gmail.com'>
            {t('Discuss now')}
          </Link>
        </Button.Animation>
      </S.TextGroup>
    </S.Container>
  )
}
