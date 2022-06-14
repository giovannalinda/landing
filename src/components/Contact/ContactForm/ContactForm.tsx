import { FiSend } from 'react-icons/fi'

import * as S from './ContactForm.styled'

export function ContactForm() {
  return (
    <S.Form>
      <S.FormGroup>
        <S.Input type='text' placeholder='Full name' />
        <S.Input type='email' placeholder='Email adress' />
      </S.FormGroup>
      <S.Input type='text' placeholder='Subjects' />
      <S.TextArea placeholder='Message' rows={7} />
      <S.SendMessage variant='purple' size='md' type='submit'>
        SEND MESSAGE <FiSend size={20} />
      </S.SendMessage>
    </S.Form>
  )
}
