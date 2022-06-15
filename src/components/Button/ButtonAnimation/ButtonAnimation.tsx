import { ReactNode } from 'react'
import { CgArrowLongRightC } from 'react-icons/cg'

import * as S from './ButtonAnimation.styled'

export type ButtonAnimationProps = {
  children: ReactNode
  visible?: boolean
}

export function ButtonAnimation({
  children,
  visible = false,
}: ButtonAnimationProps) {
  return (
    <S.Container visible={visible}>
      <span>{children}</span>
      <CgArrowLongRightC size={24} />
    </S.Container>
  )
}
