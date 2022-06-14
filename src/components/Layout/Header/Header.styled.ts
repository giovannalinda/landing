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
    font-size: ${theme.font.sizes.small};
    z-index: 1;

    a {
      position: relative;
      color: ${theme.colors.white};

      &::after {
        content: '';
        position: absolute;
        background: ${theme.colors.white};
        width: 0;
        height: 0.1rem;
        bottom: -${theme.space[0]};
        left: 0;
        transition: all ${theme.transitions.fast};
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    & + li {
      margin-left: ${theme.space[7]};
    }
  }
`
