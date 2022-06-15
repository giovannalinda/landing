import styled, { css } from 'styled-components'
import { theme } from '~/styles'

type ContainerProps = {
  visible: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 0;
    transition: all ${theme.transitions.fast};
  }

  span {
    opacity: 0;
    white-space: nowrap;
    visibility: hidden;
    transition: all ${theme.transitions.slow};
    text-transform: uppercase;
    margin-right: ${theme.space[1]};
    color: ${theme.colors.secondaryPink};
    font-size: ${theme.font.sizes.paragraph};
    font-weight: ${theme.font.weigths.semiBold};
  }

  ${({ visible }) =>
    visible &&
    css`
      svg {
        left: 13.2rem;
      }

      span {
        opacity: 1;
        visibility: visible;
      }
    `}
`
