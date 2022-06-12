import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 18rem auto 0;
`

export const WorksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${theme.space[5]};
  margin-top: 5.2rem;
`
