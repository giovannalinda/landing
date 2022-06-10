import styled, { css } from 'styled-components'
import { theme } from '~/styles'
import { ButtonProps } from './Button'

const sizes = {
  sm: css`
    padding: ${theme.space[3]};
    height: 4.8rem;
  `,
  md: css`
    padding: ${theme.space[4]} ${theme.space[5]};
  `,
}

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
}

export const Container = styled.button<Required<ButtonProps>>`
  border-radius: ${theme.borderRadius.button};
  font-weight: ${theme.font.weigths.semiBold};
  letter-spacing: ${theme.font.letterSpacing.sm};
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5rem);
    opacity: 0.8;
  }

  ${({ variant }) => variants[variant]};
  ${({ size }) => sizes[size]};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: ${theme.borderRadius.rounded};
    `}
`
