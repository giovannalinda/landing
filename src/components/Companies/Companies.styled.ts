import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 18rem;

  h1 {
    max-width: 31.2rem;
    font-size: ${theme.font.sizes.subtitle};
    font-weight: ${theme.font.weigths.regular};

    span {
      color: ${theme.colors.secondaryPink};

      &::before {
        content: '';
        position: absolute;
        width: 8.8rem;
        height: 2rem;
        background: ${theme.colors.secondaryPurple};
        opacity: 0.15;
        z-index: 0;
        margin-top: ${theme.space[4]};
      }
    }
  }
`

export const CompaniesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${theme.space[5]};
  width: 100%;
  margin-left: 7.2rem;
`

export const CompanyCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12rem;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.card};
  transition: ${theme.transitions.fast};
  cursor: pointer;

  svg {
    color: ${theme.colors.secondaryPurple};
  }

  &:hover {
    transform: translateY(-0.5rem);
  }
`
