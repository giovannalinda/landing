import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  padding-top: 12.7rem;

  h1 {
    padding-bottom: ${theme.space[5]};
    font-size: ${theme.font.sizes.subtitle};
    font-weight: ${theme.font.weigths.regular};
  }
`

export const FormContainer = styled.div`
  background: ${theme.colors.white};
  color: ${theme.colors.primaryDark};
  padding: ${theme.space[8]};
  border-radius: ${theme.borderRadius.lg};
`

export const InfoContainer = styled.div`
  position: relative;
  background: ${theme.colors.white};
  color: ${theme.colors.primaryDark};
  padding: ${theme.space[8]};
  border-radius: ${theme.borderRadius.lg};
  margin-left: ${theme.space[5]};
`

export const DotImageWrapper = styled.div`
  position: absolute;
  right: -8rem;
  top: -3rem;
`
