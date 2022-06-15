import Link from 'next/link'
import { ReactNode } from 'react'

import { Button, useButtonAnimation } from '~/components'

import * as S from './WorkCard.styled'

export type WorkCardProps = {
  children: ReactNode
  title: string
  href: string
}

export function WorkCard({ children, title, href }: WorkCardProps) {
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
        <h3>{title}</h3>

        <Button.Animation visible={isButtonTextVisible}>
          <Link href={href} target='_blank'>
            VIEW PROJECT
          </Link>
        </Button.Animation>
      </S.TextGroup>
    </S.Container>
  )
}
