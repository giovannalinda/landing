import {
  ImDribbble,
  ImBehance,
  ImFacebook,
  ImTwitter,
  ImYoutube,
} from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'

import { Button } from '../../Button'

import * as S from './Info.styled'
import { ContactList } from '../ContactList'

export function Info() {
  return (
    <>
      <h1>Get In Touch</h1>

      <ContactList />

      <S.ButtonGroup>
        <Button variant='outlined' size='md' rounded>
          <ImDribbble size={20} />
        </Button>
        <Button variant='outlined' size='md' rounded>
          <ImBehance size={20} />
        </Button>
        <Button variant='outlined' size='md' rounded>
          <ImFacebook size={20} />
        </Button>
        <Button variant='outlined' size='md' rounded>
          <ImTwitter size={20} />
        </Button>
        <Button variant='outlined' size='md' rounded>
          <AiOutlineInstagram size={20} />
        </Button>
        <Button variant='outlined' size='md' rounded>
          <ImYoutube size={20} />
        </Button>
      </S.ButtonGroup>
    </>
  )
}
