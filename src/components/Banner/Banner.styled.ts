import styled from 'styled-components'
import { Assets } from '~/assets'
import { theme } from '~/styles'
import { Container as Button } from '../Button/Button.styled'

export const Container = styled.section`
  background-image: url(${Assets.Shapes});
  height: 31.2rem;
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 16.9rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextGroup = styled.div`
  max-width: 60rem;
  padding-bottom: ${theme.space[6]};

  p {
    text-align: center;
    font-size: ${theme.font.sizes.subtitle};
    font-weight: ${theme.font.weigths.regular};
    line-height: ${theme.font.lineHeights.subtitle};

    span {
      color: ${theme.colors.secondaryPink};
    }
  }
`

export const HireMeButton = styled(Button)`
  display: flex;
  align-items: center;

  svg {
    margin-left: ${theme.space[2]};
  }
`
