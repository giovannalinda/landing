import { CgArrowLongRight } from 'react-icons/cg'

import * as S from './Banner.styled'

export function Banner() {
  return (
    <S.Container>
      <S.TextGroup>
        <p>
          {"Got a project in mind? Let's make something awesome "}
          <span>together</span>.
        </p>
      </S.TextGroup>
      <S.HireMeButton variant='purple' size='md' rounded={false}>
        HIRE ME <CgArrowLongRight size={20} />
      </S.HireMeButton>
    </S.Container>
  )
}
