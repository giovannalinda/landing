import styled from 'styled-components'
import { theme } from '~/styles/theme'

type IndicatorProps = {
  top: number
}

export const Container = styled.section`
  padding-top: 18rem;
  padding-bottom: 10rem;
`

export const TestimonialGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 4.4rem;
  margin-top: ${theme.space[8]};
  color: ${theme.colors.primaryDark};

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: ${theme.space[5]};
  }
`

export const TestimonialList = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: ${theme.space[0]};

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    overflow-x: scroll;
    align-items: center;
    grid-gap: ${theme.space[3]};
  }
`

export const QuoteContainer = styled.div`
  padding: ${theme.space[9]};
  position: relative;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.md};

  span {
    font-size: ${theme.font.sizes.large};
    padding-left: 1rem;
    display: flex;
    align-items: flex-end;
    color: ${theme.colors.primaryDark};

    svg {
      color: ${theme.colors.secondaryOrange};
      margin-right: ${theme.space[1]};
    }
  }

  p {
    padding-top: 2.6rem;
    font-size: ${theme.font.sizes.subtitle};
    line-height: 5.1rem;
    color: ${theme.colors.primaryDark};
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    p {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.lineHeights.large};
    }
  }
`

export const QuoteImageWrapper = styled.div`
  position: absolute;
  right: ${theme.space[5]};
  top: ${theme.space[5]};
`

export const Indicator = styled.div<IndicatorProps>`
  position: absolute;
  height: 3.2rem;
  width: 3.2rem;
  background: ${theme.colors.white};
  left: -1.6rem;
  top: ${({ top }) => `${top}px`};
  transform: rotate(-45deg);
  transition: all ${theme.transitions.slow};
  border-radius: ${theme.borderRadius.sm} 0 0 0;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`
