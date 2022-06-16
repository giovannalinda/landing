import styled from 'styled-components'
import { Assets } from '~/assets'
import { theme } from '~/styles'

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space[4]};
  }
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80rem;
  height: 100%;
  background: url(${Assets.Background}) no-repeat;
  background-size: cover;
  z-index: -1;

  @media screen and (min-width: 1920px) {
    min-width: 105.3rem;
  }

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    display: none;
  }
`
