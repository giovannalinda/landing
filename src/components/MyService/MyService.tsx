import { FiCode, FiLayers, FiColumns, FiBox } from 'react-icons/fi'
import { InView } from 'react-intersection-observer'

import { Title } from '~/components'
import { ServiceCard } from './ServiceCard'

import { useTranslation } from '~/lib/useTranslation'

import * as S from './MyService.styled'

export function MyService() {
  const { t } = useTranslation()

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <S.Container id='services' ref={ref}>
          <Title>{t('My Service')}</Title>

          {inView && (
            <S.ServicesList>
              <li>
                <ServiceCard title='UI/UX Design' delay={0}>
                  <FiLayers size={40} strokeWidth={1} />
                </ServiceCard>
              </li>
              <li>
                <ServiceCard title='Product Design' delay={0.3}>
                  <FiBox size={40} strokeWidth={1} />
                </ServiceCard>
              </li>
              <li>
                <ServiceCard title='Branding Design' delay={0.6}>
                  <FiColumns size={35} strokeWidth={1} />
                </ServiceCard>
              </li>
              <li>
                <ServiceCard title='Front End Development' delay={0.9}>
                  <FiCode size={40} strokeWidth={1} />
                </ServiceCard>
              </li>
            </S.ServicesList>
          )}
        </S.Container>
      )}
    </InView>
  )
}
