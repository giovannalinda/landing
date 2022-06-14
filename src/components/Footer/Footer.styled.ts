import styled from 'styled-components'
import { theme } from '~/styles'

export const Footer = styled.footer`
  width: 100%;
  margin: 16rem auto 17.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  small {
    margin-top: 1.8rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray500};

    a {
      color: ${theme.colors.secondaryPurple};
    }
  }
`

export const Separator = styled.hr`
  border: 0.1px solid ${theme.colors.gray100};
  width: 100%;
  opacity: 0.1;
  margin-top: 10.8rem;
  margin-bottom: 5.3rem;
`
