import styled from 'styled-components'

import { theme } from '~/styles'

export const Title = styled.h1`
  font-weight: ${theme.font.weigths.regular};
  font-size: ${theme.font.sizes.subtitle};
  text-align: center;
`

export const Separator = styled.hr`
  border-color: ${theme.colors.secondaryPink};
  border-radius: 5rem;
  width: 6.4rem;
  margin: ${theme.space[4]} auto 0;
`
