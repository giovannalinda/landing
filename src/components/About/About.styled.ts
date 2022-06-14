import styled from 'styled-components'
import { theme } from '~/styles'

import { Container as Button } from '../Button/Button.styled'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5.6rem;
  align-items: center;
  padding-top: 13.2rem;
`

export const Content = styled.div`
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
`

export const Carrer = styled.div`
  display: flex;
  gap: ${theme.space[8]};

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
`

export const CarrerItem = styled.div`
  display: flex;
  align-items: center;
`

export const SayHelloButton = styled(Button)`
  display: flex;
  align-items: center;
  margin-top: ${theme.space[6]};
  margin-right: auto;

  svg {
    margin-left: ${theme.space[2]};
  }
`
