import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 0 auto;
  padding-top: 22.7rem;
  display: grid;
  grid-template-columns: 1.3fr 1fr;

  h1 {
    padding-bottom: ${theme.space[5]};
    font-size: 3.2rem;
    font-weight: ${theme.font.weigths.regular};
  }
`

export const ContactForm = styled.div`
  background: ${theme.colors.white};
  color: ${theme.colors.primaryDark};
  padding: ${theme.space[8]};
  border-radius: 0.8rem;
`

export const ContactInfo = styled.div`
  background: ${theme.colors.white};
  color: ${theme.colors.primaryDark};
  padding: 4.8rem;
  border-radius: 0.8rem;
  margin-left: ${theme.space[5]};
`

export const ContainerImage = styled.div`
  position: absolute;
  margin-top: -8rem;
  margin-left: 40rem;
`
