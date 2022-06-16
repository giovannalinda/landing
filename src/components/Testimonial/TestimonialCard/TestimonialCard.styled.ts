import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.button`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  padding: ${theme.space[5]};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.slow};
  width: 100%;

  &:hover {
    background: ${theme.colors.gray100};
  }
`

export const TestimonialProfile = styled.div`
  border-radius: ${theme.borderRadius.rounded};
  width: 5.2rem;
  height: 5.2rem;
  background: ${theme.colors.gray500};

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    min-width: 5.2rem;
  }
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

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    h3,
    small {
      white-space: nowrap;
    }
  }
`
