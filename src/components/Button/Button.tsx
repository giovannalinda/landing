import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  ButtonHTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes,
} from 'react'

import { ButtonAnimation } from './ButtonAnimation'

import * as S from './Button.styled'

type NativeProps =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: 'a' | 'button'
  children: ReactNode
  size?: 'sm' | 'md'
  rounded?: boolean
  variant?: 'purple' | 'white' | 'outlined' | 'neutral'
} & NativeProps

type ButtonCompoundComponet = {
  Animation: typeof ButtonAnimation
} & ForwardRefExoticComponent<ButtonProps>

const ForwardButton: ForwardRefRenderFunction<any, ButtonProps> = (
  { as, children, size = 'md', rounded = false, variant = 'purple', ...rest },
  ref,
) => {
  return (
    <S.Container
      ref={ref}
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

export const Button = forwardRef(ForwardButton) as ButtonCompoundComponet

Button.Animation = ButtonAnimation

export * from './useButtonAnimation'
