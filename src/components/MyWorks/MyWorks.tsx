import Image from 'next/image'
import { Assets } from '~/assets'

import { Title } from '../Title'
import { WorkCard } from './WorkCard'

import * as S from './MyWorks.styled'

export function MyWorks() {
  return (
    <S.Container id='works'>
      <Title>My Selected Work</Title>

      <S.WorksList>
        <li>
          <WorkCard title='Eduguard - E-learning Website'>
            <Image src={Assets.ImgWork1} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard title='Eduguard - E-learning Website'>
            <Image src={Assets.ImgWork2} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard title='Huma Marketing Agency'>
            <Image src={Assets.ImgWork3} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard title='Beeryblog Blog Website'>
            <Image src={Assets.ImgWork4} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard title='Educare Elearning website'>
            <Image src={Assets.ImgWork5} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard title='Blogy Blog Website'>
            <Image src={Assets.ImgWork6} width='424' height='332' />
          </WorkCard>
        </li>
      </S.WorksList>
    </S.Container>
  )
}
