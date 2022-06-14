import styled from 'styled-components'
import { theme } from '~/styles'

export const Header = styled.header`
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 0 auto;
  padding: ${theme.space[6]} 0;
`

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

    a {
      color: ${theme.colors.white};
    }

    & + li {
      margin-left: ${theme.space[7]};
    }
  }
`
