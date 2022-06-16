import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '~/styles'

import { Container as Button } from '../Button/Button.styled'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5.6rem;
  align-items: center;
  padding-top: 13.2rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    justify-content: center;
    display: flex;
  }
`

export const AboutImageWrapper = styled(motion.div)`
  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    display: none;
  }
`

export const Content = styled(motion.div)`
  display: flex;
  text-align: left;
  flex-direction: column;

  h1 {
    max-width: 67.2rem;
    font-size: ${theme.font.sizes.extraTitle};
    font-weight: ${theme.font.weigths.medium};
    line-height: ${theme.font.lineHeights.extraTitle};
  }

  p {
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.lineHeights.large};
    color: ${theme.colors.gray500};
    max-width: 67.2rem;
    padding-top: 2rem;
    padding-bottom: 3.6rem;
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    text-align: center;

    h1 {
      font-size: ${theme.font.sizes.title};
      line-height: 5.2rem;
    }

    p {
      font-size: ${theme.font.sizes.small};
    }
  }
`

export const Carrer = styled.div`
  display: flex;
  text-align: left;
  gap: ${theme.space[8]};

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.space[4]};
    flex-direction: column;
  }
`

export const CarrerItem = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: ${theme.colors.secondaryPink};
    font-size: 5.6rem;
    line-height: 6.4rem;
    font-weight: ${theme.font.weigths.regular};
  }

  span {
    max-width: 9.5rem;
    margin-left: ${theme.space[4]};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.lineHeights.large};
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    background: rgba(255, 255, 255, 0.015);
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.space[3]} ${theme.space[6]};

    h3 {
      width: 6rem;
      font-size: ${theme.font.sizes.subtitle};
    }

    span {
      font-size: ${theme.font.sizes.small};
      max-width: 100%;
    }
  }
`

export const SayHelloButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: ${theme.space[6]};
  margin-right: auto;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  svg {
    margin-left: ${theme.space[2]};
  }
`
