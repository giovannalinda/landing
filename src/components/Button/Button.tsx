import { ButtonHTMLAttributes, ReactNode } from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

import * as S from './Button.styled'

export type ButtonProps = {
  children: ReactNode
  size?: 'sm' | 'md'
  rounded?: boolean
  variant?: 'purple' | 'white' | 'outlined'
} & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonAnimationProps = {
  children: ReactNode
  visible?: boolean
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

Button.Animation = function ButtonAnimation({
  children,
  visible = false,
}: ButtonAnimationProps) {
  return (
    <S.ButtonAnimationWrapper visible={visible}>
      <span>{children}</span>
      <CgArrowLongRight size={24} />
    </S.ButtonAnimationWrapper>
  )
}

export * from './useButtonAnimation'
