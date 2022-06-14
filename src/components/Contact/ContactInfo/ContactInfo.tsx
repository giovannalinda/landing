import {
  ImDribbble,
  ImBehance,
  ImFacebook,
  ImTwitter,
  ImYoutube,
} from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'

import { Button } from '~/components'

import { ContactList } from './ContactList'

import * as S from './ContactInfo.styled'

export function ContactInfo() {
  return (
    <>
      <h1>Get In Touch</h1>

      <ContactList />

      <S.ButtonGroup>
        <Link href='https://dribbble.com/giovannalinda'>
          <Button variant='outlined' size='md' rounded>
            <ImDribbble size={20} />
          </Button>
        </Link>
        <Link href='https://dribbble.com/giovannalinda'>
          <Button variant='outlined' size='md' rounded>
            <ImBehance size={20} />
          </Button>
        </Link>
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
