import { FiCode, FiLayers, FiColumns, FiBox } from 'react-icons/fi'
import { Title } from '~/components'

import { ServiceCard } from './ServiceCard'

import * as S from './MyService.styled'

export function MyService() {
  return (
    <S.Container>
      <Title>My Service</Title>

      <S.ServicesList>
        <li>
          <ServiceCard title='UI/UX Design'>
            <FiLayers size={40} strokeWidth={1} />
          </ServiceCard>
        </li>
        <li>
          <ServiceCard title='Product Design'>
            <FiBox size={40} strokeWidth={1} />
          </ServiceCard>
        </li>
        <li>
          <ServiceCard title='Branding Design'>
            <FiColumns size={35} strokeWidth={1} />
          </ServiceCard>
        </li>
        <li>
          <ServiceCard title='Front End Development'>
            <FiCode size={40} strokeWidth={1} />
          </ServiceCard>
        </li>
      </S.ServicesList>
    </S.Container>
  )
}
