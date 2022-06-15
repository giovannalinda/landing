import styled, { css } from 'styled-components'
import { theme } from '~/styles'
import { ButtonProps } from './Button'

type ButtonAnimationWrapperProps = {
  visible: boolean
}

const sizes = (rounded: boolean) => ({
  sm: css`
    padding: ${theme.space[3]};
    height: 4.8rem;

    ${rounded &&
    css`
      height: 4rem;
      width: 4rem;
    `}
  `,
  md: css`
    padding: ${theme.space[4]} ${theme.space[6]};

    ${rounded &&
    css`
      height: 6rem;
      width: 6rem;
    `}
  `,
})

const variants = {
  purple: css`
    background: ${theme.colors.secondaryPurple};
    color: ${theme.colors.white};

    &:focus {
      outline-offset: 0.3rem;
      outline: 0.2rem solid ${theme.colors.secondaryPurple};
    }
  `,
  white: css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryDark};

    &:focus {
      outline-offset: 0.3rem;
      outline: 0.2rem solid ${theme.colors.white};
    }
  `,
  outlined: css`
    background: transparent;
    border: 0.1rem solid ${theme.colors.gray100};
    color: ${theme.colors.primaryDark};

    &:hover,
    &:focus {
      color: ${theme.colors.white};
      background: ${theme.colors.secondaryPurple};
    }
  `,
}

export const Container = styled.button<ButtonProps>`
  border-radius: ${theme.borderRadius.button};
  font-weight: ${theme.font.weigths.semiBold};
  letter-spacing: ${theme.font.letterSpacing.sm};
  transition: all ${theme.transitions.fast};

  &:hover {
    transform: translateY(-0.5rem);
    opacity: 0.8;
  }

  ${({ variant }) => variant && variants[variant]};
  ${({ size, rounded = false }) => size && sizes(rounded)[size]};
  ${({ rounded }) =>
    rounded &&
    css`
      padding: 0;
      display: grid;
      place-items: center;
      border-radius: ${theme.borderRadius.rounded};
    `}

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.font.sizes.small};
    white-space: nowrap;
  }
`

export const ButtonAnimationWrapper = styled.div<ButtonAnimationWrapperProps>`
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
