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
`

export const TestimonialList = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: ${theme.space[0]};
`

export const TertimonialCardButton = styled.button`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  padding: ${theme.space[5]};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.4s;
  width: 100%;

  &:hover {
    background: ${theme.colors.gray100};
  }
`

export const TestimonialProfile = styled.div`
  background: ${theme.colors.gray500};
  border-radius: ${theme.borderRadius.rounded};
  width: 5.2rem;
  height: 5.2rem;
`

export const TestimonialClient = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${theme.space[4]};
  text-align: left;

  h3 {
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weigths.regular};
    margin-bottom: ${theme.space[0]};
  }

  small {
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray500};
  }

  span {
    color: ${theme.colors.secondaryPink};
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
    font-size: 3.2rem;
    line-height: 5.1rem;
    color: ${theme.colors.primaryDark};
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
  transition: all 0.5s;
  border-radius: 0.4rem 0 0 0;
`
