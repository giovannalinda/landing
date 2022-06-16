import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

import * as S from './ContactList.styled'

export function ContactList() {
  return (
    <S.ContactList>
      <li>
        <S.Icon>
          <FiMapPin size={26} />
        </S.Icon>
        <small>
          Diadema,
          <br /> São Paulo - SP, Brazil.
        </small>
      </li>

      <li>
        <S.Icon>
          <FiMail size={26} />
        </S.Icon>
        <small>
          eugiovannasouza@gmail.com <br />
          oigiovannalinda@gmail.com
        </small>
      </li>

      <li>
        <S.Icon>
          <FiPhone size={26} />
        </S.Icon>
        <small>
          +55 955 258 2699 <br /> +55 955 100 9449
        </small>
      </li>
    </S.ContactList>
  )
}
