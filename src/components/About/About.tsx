import { CgArrowLongRight } from 'react-icons/cg'
import Image from 'next/image'

import { Assets } from '~/assets'

import Link from 'next/link'
import * as S from './About.styled'

export function About() {
  return (
    <S.Container id='about'>
      <S.AboutImageWrapper>
        <Image src={Assets.About} layout='raw' width='592' height='574' />
      </S.AboutImageWrapper>
      <S.Content>
        <h1>Developing quality digital products through codes. ✨</h1>
        <p>
          I&apos;m a front end developer with a sparkle in the eyes who&apos;s
          always looking for the next level and who writes about technology to
          contribute to the community. Some of my goals are to have continuous
          growth, boost people through education and build good quality
          interfaces.
        </p>

        <S.Carrer>
          <S.CarrerItem>
            <h3>1+</h3>
            <span>Years of Experience</span>
          </S.CarrerItem>
          <S.CarrerItem>
            <h3>28+</h3>
            <span>Completed Projects</span>
          </S.CarrerItem>
        </S.Carrer>
        <Link href='mailto:eugiovannasouza@gmail.com'>
          <S.SayHelloButton variant='purple' size='md' rounded={false}>
            SAY HI <CgArrowLongRight size={24} />
          </S.SayHelloButton>
        </Link>
      </S.Content>
    </S.Container>
  )
}
