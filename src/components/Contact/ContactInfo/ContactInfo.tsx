import Link from 'next/link'

import { ImDribbble, ImGithub, ImLinkedin2 } from 'react-icons/im'
import { BsInstagram, BsMedium } from 'react-icons/bs'

import { Button } from '~/components'
import { ContactList } from './ContactList'

import * as S from './ContactInfo.styled'

export function ContactInfo() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Get In Touch</h1>

      <ContactList />

      <S.ButtonGroup>
        <Link href='https://dribbble.com/giovannalinda' target='_blank'>
          <Button variant='outlined' size='md' rounded>
            <ImDribbble size={20} />
          </Button>
        </Link>
        <Link href='https://github.com/giovannalinda' target='_blank'>
          <Button variant='outlined' size='md' rounded>
            <ImGithub size={20} />
          </Button>
        </Link>
        <Link href='https://www.linkedin.com/in/giovannalinda' target='_blank'>
          <Button variant='outlined' size='md' rounded>
            <ImLinkedin2 size={20} />
          </Button>
        </Link>
        <Link href='https://www.instagram.com/_gripada' target='_blank'>
          <Button size='md' variant='outlined' rounded>
            <BsInstagram size={20} />
          </Button>
        </Link>
        <Link href='https://medium.com/@eugiovannasouza' target='_blank'>
          <Button size='md' variant='outlined' rounded>
            <BsMedium size={20} />
          </Button>
        </Link>
      </S.ButtonGroup>
    </>
  )
}
