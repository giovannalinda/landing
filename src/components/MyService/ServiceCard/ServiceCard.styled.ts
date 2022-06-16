import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled(motion.button)`
  position: relative;
  height: 35.1rem;
  width: 100%;
  border: 0;
  background: rgba(255, 255, 255, 0.9);
  border-radius: ${theme.borderRadius.card};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${theme.space[6]};
  transition: all ${theme.transitions.slow};

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space[4]};
    height: 25.1rem;
  }

  svg {
    transition: all ${theme.transitions.slow};
  }

  &:focus {
    outline: 0.2rem solid ${theme.colors.white};
    outline-offset: 0.4rem;
  }

  &:hover,
  &:focus {
    background: ${theme.colors.white};

    svg {
      color: ${theme.colors.secondaryPink};
    }
  }

  a {
    color: ${theme.colors.secondaryPink};
  }
`

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.font.sizes.subtitle};
  text-align: left;
  line-height: 4rem;
  max-width: 15rem;
  color: ${theme.colors.primaryDark};

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.font.sizes.large};
    max-width: 10rem;
    line-height: 2rem;
  }
`

export const Separator = styled.hr`
  border-color: ${theme.colors.secondaryPink};
  border-radius: 5rem;
  width: 6.4rem;
  opacity: 0.4;
  margin-top: ${theme.space[4]};
  margin-bottom: ${theme.space[5]};
`
