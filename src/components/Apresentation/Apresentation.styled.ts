import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 12rem auto 0;
  height: calc(100vh - 20rem);
  padding-bottom: ${theme.space[8]};
`

export const TextGroup = styled.div`
  h1 {
    font-size: 7rem;
    font-weight: ${theme.font.weigths.regular};
    max-width: 70.7rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: calc(100% - 14rem);
      height: 3.6rem;
      background: ${theme.colors.secondaryPurple};
      opacity: 0.15;
      left: 0;
      bottom: 0;
      z-index: 0;
      margin-left: ${theme.space[4]};
    }
  }

  span {
    color: ${theme.colors.secondaryPurple};
  }

  p {
    font-size: ${theme.font.sizes.paragraph};
    max-width: 55rem;
    color: ${theme.colors.gray500};
    margin: ${theme.space[6]} 0;
    line-height: ${theme.font.lineHeights.paragraph};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  button + button {
    margin-left: ${theme.space[4]};
  }
`

export const SocialNetworks = styled.div`
  p {
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.paragraph};
    margin-bottom: ${theme.space[2]};
  }

  button + button {
    margin-left: ${theme.space[2]};
  }
`
