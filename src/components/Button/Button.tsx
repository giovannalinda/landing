import { ReactNode } from 'react'

import * as S from './Button.styled'

export type ButtonProps = {
  children: ReactNode
  size?: 'sm' | 'md'
  rounded?: boolean
  variant?: 'purple' | 'white'
}

export function Button({
  children,
  size = 'md',
  rounded = false,
  variant = 'purple',
}: ButtonProps) {
  return (
    <S.Container size={size} rounded={rounded} variant={variant}>
      {children}
    </S.Container>
  )
}
