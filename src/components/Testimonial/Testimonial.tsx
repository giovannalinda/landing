import { useRef } from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import Image from 'next/image'

import { Assets } from '~/assets'
import { Title } from '~/components'
import { useIndicator } from '~/lib/useIndicator'

import { TestimonialCard } from './TestimonialCard'

import * as S from './Testimonial.styled'
import { useTranslation } from '~/lib/useTranslation'

const people = [
  {
    name: 'Sundar Pichai',
    office: 'CEO e Founder',
    company: 'Google',
  },
  {
    name: 'Shantanu Narayen',
    office: 'CEO',
    company: 'Adobe',
  },
  {
    name: 'Noah Levin',
    office: 'Director of Design',
    company: 'Figma',
  },
  {
    name: 'Stewart Butterfield',
    office: 'CEO e Founder',
    company: 'Slack',
  },
]

const VALUE_TO_CENTER = 35

export function Testimonial() {
  const { t } = useTranslation()
  const testimonialListRef = useRef(null)

  const { indicatorPosition, changeIndicatorPosition } = useIndicator(
    testimonialListRef,
    VALUE_TO_CENTER,
  )

  return (
    <S.Container>
      <Title>{t('Testimonial')}</Title>

      <S.TestimonialGroup>
        <S.TestimonialList ref={testimonialListRef}>
          {people.map((person) => (
            <li key={person.name} onClick={changeIndicatorPosition}>
              <TestimonialCard
                name={person.name}
                office={person.office}
                company={person.company}
              />
            </li>
          ))}
        </S.TestimonialList>

        <S.QuoteContainer>
          <span>
            <BsFillStarFill size={24} />
            5.0 {t('Star Rating')}
          </span>
          <S.QuoteImageWrapper>
            <Image src={Assets.Quote} width='95' height='75' />
          </S.QuoteImageWrapper>
          <p>
            {t(
              "“If you're looking for someone who challenges your Front thinking and really gets to the heart of what's important to users, then Giovanna is for you. Plus, she brings a level of enthusiasm to the craft that is energizing for everyone who works with her.”",
            )}
          </p>

          <S.Indicator top={indicatorPosition} />
        </S.QuoteContainer>
      </S.TestimonialGroup>
    </S.Container>
  )
}
