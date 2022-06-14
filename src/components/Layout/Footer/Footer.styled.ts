import styled from 'styled-components'
import { theme } from '~/styles'

export const Footer = styled.footer`
  width: 100%;
  display: grid;
  place-items: center;
  padding-bottom: 17.8rem;

  small {
    margin-top: ${theme.space[4]};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray500};

    a {
      color: ${theme.colors.secondaryPurple};
    }
  }
`

export const Separator = styled.hr`
  border: 0.1rem solid ${theme.colors.gray100};
  width: 100%;
  opacity: 0.1;
  margin-top: 10.8rem;
  margin-bottom: 5.3rem;
`
