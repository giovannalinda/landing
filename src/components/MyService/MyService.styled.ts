import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  padding-top: 18.8rem;
  padding-bottom: 8rem;
`

export const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${theme.space[5]};
  margin-top: 7rem;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
