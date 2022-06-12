import styled from 'styled-components'
import { theme } from '~/styles'

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;

  ul {
    display: flex;
  }

  li {
    font-weight: ${theme.font.weigths.bold};
    letter-spacing: ${theme.font.letterSpacing.md};
    font-size: 1.4rem;
    z-index: 1;

    & + li {
      margin-left: ${theme.space[7]};
    }
  }
`
