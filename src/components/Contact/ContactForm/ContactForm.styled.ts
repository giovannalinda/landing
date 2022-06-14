import styled, { css } from 'styled-components'
import { theme } from '~/styles'

import { Container as Button } from '../../Button/Button.styled'

export const globalInputCss = css`
  border: 0.1rem solid ${theme.colors.gray100};
  width: 100%;
  min-height: 5.2rem;
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.space[3]} 2rem;
  transition: all ${theme.transitions.fast};
  outline: 0;

  &:focus {
    border-color: ${theme.colors.secondaryPurple};
  }

  &::placeholder {
    color: ${theme.colors.gray500};
  }
`

export const Form = styled.form`
  display: grid;
  grid-gap: ${theme.space[4]};
`

export const FormGroup = styled.div`
  display: grid;
  grid-gap: ${theme.space[4]};
  grid-template-columns: 1fr 1fr;
`

export const Input = styled.input`
  ${globalInputCss}
`

export const TextArea = styled.textarea`
  resize: none;
  font-family: ${theme.font.family};

  ${globalInputCss};
`

export const SendMessage = styled(Button)`
  display: flex;
  align-items: center;
  font-weight: ${theme.font.weigths.semiBold};
  margin-top: 1rem;
  margin-right: auto;

  svg {
    margin-left: ${theme.space[2]};
  }
`
