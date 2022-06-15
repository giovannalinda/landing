import Link from 'next/link'
import { ReactNode } from 'react'

import { Button, useButtonAnimation } from '~/components'

import * as S from './ServiceCard.styled'

export type ServiceCardProps = {
  children: ReactNode
  title: string
}

export function ServiceCard({ children, title }: ServiceCardProps) {
  const { isButtonTextVisible, showButtonText, hiddenButtonText } =
    useButtonAnimation()

  return (
    <S.Container
      aria-label={title}
      onMouseEnter={showButtonText}
      onMouseLeave={hiddenButtonText}
      onFocus={showButtonText}
      onBlur={hiddenButtonText}
    >
      {children}

      <S.TextGroup>
        {title}
        <S.Separator />
        <Button.Animation visible={isButtonTextVisible}>
          <Link href='mailto:eugiovannasouza@gmail.com'>Discuss now</Link>
        </Button.Animation>
      </S.TextGroup>
    </S.Container>
  )
}
