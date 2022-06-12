import { ReactNode } from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

import * as S from './ServiceCard.styled'

export type ServiceCardProps = {
  children: ReactNode
  title: string
}

export function ServiceCard({ children, title }: ServiceCardProps) {
  return (
    <S.Container aria-label={title}>
      {children}

      <S.TextGroup>
        {title}
        <S.Separator />
        <div className='discussNow'>
          <span>Discuss now</span>
          <CgArrowLongRight size={24} />
        </div>
      </S.TextGroup>
    </S.Container>
  )
}
