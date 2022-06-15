import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.button`
  cursor: pointer;
  background: ${theme.colors.white};
  color: ${theme.colors.primaryDark};
  border-radius: ${theme.borderRadius.card};
  text-align: left;

  &:focus {
    outline: 0.2rem solid ${theme.colors.white};
    outline-offset: 0.4rem;
  }

  svg {
    color: ${theme.colors.secondaryPink};
  }
`

export const TextGroup = styled.div`
  padding: 24px;

  h3 {
    font-size: 2.4rem;
    font-weight: ${theme.font.weigths.regular};
    padding-bottom: 2.6rem;
  }

  a {
    color: ${theme.colors.secondaryPink};
  }
`
