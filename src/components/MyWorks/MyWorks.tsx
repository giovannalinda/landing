import Image from 'next/image'

import { Assets } from '~/assets'
import { Title } from '~/components'

import { WorkCard } from './WorkCard'

import * as S from './MyWorks.styled'
import { useTranslation } from '~/lib/useTranslation'

export function MyWorks() {
  const { t } = useTranslation()

  return (
    <S.Container id='works'>
      <Title>{t('My Selected Work')}</Title>

      <S.WorksList>
        <li>
          <WorkCard
            title='Landing Blizzard'
            href='https://github.com/giovannalinda/games-page'
          >
            <Image src={Assets.ImgWork1} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard
            title='Disney+ Web App'
            href='https://github.com/giovannalinda/disney-webapp'
          >
            <Image src={Assets.ImgWork2} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard
            title='Tasks Management'
            href='https://github.com/giovannalinda/tasks-management'
          >
            <Image src={Assets.ImgWork3} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard
            title='HBO Max Web App'
            href='https://github.com/giovannalinda/movie-theater'
          >
            <Image src={Assets.ImgWork4} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard
            title='Github Explorer'
            href='https://github.com/giovannalinda/github-explorer'
          >
            <Image src={Assets.ImgWork5} width='424' height='332' />
          </WorkCard>
        </li>

        <li>
          <WorkCard
            title='Pokémon Lister'
            href='https://github.com/giovannalinda/poke-lister'
          >
            <Image src={Assets.ImgWork6} width='424' height='332' />
          </WorkCard>
        </li>
      </S.WorksList>
    </S.Container>
  )
}
