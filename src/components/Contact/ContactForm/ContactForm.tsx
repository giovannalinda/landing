import { FiSend } from 'react-icons/fi'
import { useTranslation } from '~/lib/useTranslation'

import * as S from './ContactForm.styled'

export function ContactForm() {
  const { t } = useTranslation()

  return (
    <S.Form>
      <S.FormGroup>
        <S.Input type='text' placeholder={t('Full name')} />
        <S.Input type='email' placeholder={t('Email adress')} />
      </S.FormGroup>
      <S.Input type='text' placeholder={t('Subjects')} />
      <S.TextArea placeholder={t('Message')} rows={7} />
      <S.SendMessage variant='purple' size='md' type='submit'>
        {t('Send message')} <FiSend size={20} />
      </S.SendMessage>
    </S.Form>
  )
}
