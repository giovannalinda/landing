import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 18rem auto 0;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 3.2rem;
    max-width: 31.2rem;

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

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12rem;
    background: ${theme.colors.white};
    border-radius: ${theme.borderRadius.card};
    transition: 0.2s;
    cursor: pointer;

    svg {
      color: ${theme.colors.secondaryPurple};
    }

    &:hover {
      transform: translateY(-0.5rem);
    }
  }
`
