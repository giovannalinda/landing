import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

import { Button } from '~/components'

import * as S from './LocaleSelect.styled'

const locales = [
  {
    name: 'English',
    locale: 'en-US',
    icon: '/countries/usa.svg',
  },
  {
    name: 'Português',
    locale: 'pt-BR',
    icon: '/countries/brazil.svg',
  },
]

export function LocaleSelect() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  function toggleSelectListVisibility() {
    setIsOpen((prevState) => !prevState)
  }

  const localeSelected =
    locales.find((language) => language.locale === router.locale) || locales[0]

  return (
    <S.Container>
      <Button
        variant='neutral'
        size='sm'
        onClick={toggleSelectListVisibility}
        aria-label='locale select'
      >
        <S.CountryFlag
          width={70}
          height={30}
          alt={localeSelected.name}
          src={localeSelected.icon}
        />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <S.SelectList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label='select list'
          >
            {locales
              .filter((locale) => locale.name !== localeSelected.name)
              .map(({ name, icon, locale }) => (
                <li key={locale}>
                  <Link href='/' locale={locale}>
                    <S.CountryFlag src={icon} alt={name} />
                  </Link>
                </li>
              ))}
          </S.SelectList>
        )}
      </AnimatePresence>
    </S.Container>
  )
}
