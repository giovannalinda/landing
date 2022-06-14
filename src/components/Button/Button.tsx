import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

import * as S from './Button.styled'

type NativeProps =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: 'a' | 'button'
  children: ReactNode
  size?: 'sm' | 'md'
  rounded?: boolean
  variant?: 'purple' | 'white' | 'outlined'
} & NativeProps

export type ButtonAnimationProps = {
  children: ReactNode
  visible?: boolean
}

export function Button({
  as,
  children,
  size = 'md',
  rounded = false,
  variant = 'purple',
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      as={as}
      size={size}
      rounded={rounded}
      variant={variant}
      {...rest}
    >
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
