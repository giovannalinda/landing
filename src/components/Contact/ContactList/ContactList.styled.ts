import styled from 'styled-components'
import { theme } from '~/styles'

export const ContactList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: ${theme.space[5]};

  li {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  small {
    font-size: ${theme.font.sizes.large};
    margin-left: 2rem;
    line-height: 2.8rem;
  }
`

export const Icon = styled.div`
  background: #f0edff;
  border-radius: ${theme.borderRadius.rounded};
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${theme.colors.secondaryPink};
  }
`
