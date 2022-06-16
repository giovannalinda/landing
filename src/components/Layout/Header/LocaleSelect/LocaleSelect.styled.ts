import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import styled, { css } from 'styled-components'
import { theme } from '~/styles'

type ChevronDownWithMarginProps = {
  isOpen: boolean
}

export const Container = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    &:hover {
      transform: none;
      opacity: 1;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    margin-right: ${theme.space[4]};

    button {
      padding: 0;
      height: auto;
      background: transparent;
    }
  }
`

export const CountryFlag = styled.img`
  width: 3.2rem;
  border-radius: ${theme.borderRadius.md};
`

export const ChevronDownWithMargin = styled(
  FiChevronDown,
)<ChevronDownWithMarginProps>`
  margin-left: ${theme.space[4]};
  color: ${theme.colors.gray500};
  transition: ${theme.transitions.fast};

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-180deg);
    `}
`

export const SelectList = styled(motion.ul)`
  position: absolute;
  padding: ${theme.space[3]};
  top: calc(100% - 0.4rem);
  background: ${theme.colors.gray800};
  border-radius: 0 0 ${theme.borderRadius.lg} ${theme.borderRadius.lg};

  li + li {
    margin-top: ${theme.space[4]};
  }

  a {
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weigths.medium};
    font-size: ${theme.font.sizes.paragraph};
  }
`
