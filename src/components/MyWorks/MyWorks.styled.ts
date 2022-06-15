import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  padding-top: 10rem;
`

export const WorksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${theme.space[5]};
  margin-top: ${theme.space[9]};

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
