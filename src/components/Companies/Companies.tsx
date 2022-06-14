import Image from 'next/image'
import { Assets } from '~/assets'
import { CgArrowLongRight } from 'react-icons/cg'

import * as S from './Companies.styled'

export function Companies() {
  return (
    <S.Container>
      <p>
        I worked with <span>289+</span> Companies all over the World.
      </p>

      <S.CompaniesList>
        <li>
          <Image src={Assets.LogoYoutube} width='113' height='26' />
        </li>

        <li>
          <Image src={Assets.LogoGoogle} width='113' height='26' />
        </li>

        <li>
          <Image src={Assets.LogoAdobe} width='113' height='26' />
        </li>

        <li>
          <Image src={Assets.LogoSketch} width='113' height='26' />
        </li>

        <li>
          <CgArrowLongRight size={30} />
        </li>
      </S.CompaniesList>
    </S.Container>
  )
}
