import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 28.4rem auto 0;
`

export const TestimonialGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 4.4rem;
  margin-top: 5rem;
  color: ${theme.colors.primaryDark};
`

export const TestimonialList = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0.4rem;
`

export const TertimonialCardButton = styled.button`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  padding: ${theme.space[5]};
  border-radius: ${theme.borderRadius.listItem};
  transition: 0.4s;
  width: 100%;

  :hover {
    background: #dfe3eb;
  }
`

export const TestimonialProfile = styled.div`
  border-radius: ${theme.borderRadius.rounded};
  width: 5.2rem;
  height: 5.2rem;
  background: ${theme.colors.gray500};
`

export const TestimonialClient = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${theme.space[4]};
  text-align: left;

  h3 {
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weigths.regular};
    margin-bottom: 0.3rem;
  }

  small {
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray500};
  }

  span {
    color: ${theme.colors.secondaryPink};
  }
`

export const Testimonial = styled.div`
  padding: 5.2rem;
  position: relative;
  border-radius: ${theme.borderRadius.quote};
  background: ${theme.colors.white};

  span {
    font-size: ${theme.font.sizes.large};
    padding-left: 1rem;
    display: flex;
    align-items: flex-end;
    color: ${theme.colors.primaryDark};

    svg {
      color: #ff8718;
      margin-right: 1rem;
    }
  }

  p {
    padding-top: 2.6rem;
    font-size: 3.2rem;
    line-height: 5.1rem;
    color: ${theme.colors.primaryDark};
  }
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: right;
  margin-top: -5rem;
`

type IndicatorProps = {
  top: number
}

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
