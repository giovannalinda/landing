import { CgArrowLongRight } from 'react-icons/cg'
import Image from 'next/image'

import { Assets } from '~/assets'

import * as S from './About.styled'

export function About() {
  return (
    <S.Container id='#about'>
      <Image src={Assets.About} width='592' height='574' />
      <S.Content>
        <h1>
          Software Engineer and Infrastructure specialist based in Brazil.
        </h1>
        <p>
          Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc
          finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat
          enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie
          commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et
          interdum interdum.
        </p>

        <S.Carrer>
          <S.CarrerItem>
            <h3>17+</h3>
            <span>Years of Experience</span>
          </S.CarrerItem>
          <S.CarrerItem>
            <h3>325+</h3>
            <span>Completed Projects</span>
          </S.CarrerItem>
        </S.Carrer>
        <S.SayHelloButton variant='purple' size='md' rounded={false}>
          SAY HI <CgArrowLongRight size={24} />
        </S.SayHelloButton>
      </S.Content>
    </S.Container>
  )
}
