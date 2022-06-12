import styled from 'styled-components'
import { theme } from '~/styles'

import { Container as Button } from '../Button/Button.styled'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 13.2rem;
`

export const Content = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  padding-left: 5.6rem;

  h1 {
    font-size: ${theme.font.sizes.title};
    font-weight: ${theme.font.weigths.medium};
    line-height: 5.6rem;
    max-width: 67.2rem;
  }

  p {
    font-size: ${theme.font.sizes.large};
    line-height: 2.8rem;
    color: ${theme.colors.gray500};
    max-width: 67.2rem;
    padding-top: 2rem;
    padding-bottom: 3.6rem;
  }
`

export const Carrer = styled.div`
  display: flex;
  gap: ${theme.space[4]};

  h3 {
    color: ${theme.colors.secondaryPink};
    font-size: 5.6rem;
    line-height: 6.4rem;
    font-weight: ${theme.font.weigths.regular};
  }

  span {
    margin-left: ${theme.space[4]};
    font-size: ${theme.font.sizes.large};
    max-width: 9.5rem;
    line-height: 2.8rem;
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
