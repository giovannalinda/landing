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
          House #5, Street Number #98,
          <br /> brasilia- 70000-000, Brazil.
        </small>
      </li>

      <li>
        <S.Icon>
          <FiMail size={26} />
        </S.Icon>
        <small>
          albert.design@gmail.com <br />
          albert.flores@gmail.com
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
