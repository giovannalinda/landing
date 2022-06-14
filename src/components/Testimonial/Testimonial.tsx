import { Title } from '../Title'

import { BsFillStarFill } from 'react-icons/bs'

import { useRef } from 'react'

import { useIndicator } from '~/lib/useIndicator'
import { TestimonialCard } from './TestimonialCard'

import * as S from './Testimonial.styled'
import Image from 'next/image'
import { Assets } from '~/assets'

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
  const testimonialListRef = useRef(null)

  const { indicatorPosition, changeIndicatorPosition } = useIndicator(
    testimonialListRef,
    VALUE_TO_CENTER,
  )

  return (
    <S.Container>
      <Title>Testimonial</Title>

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

        <S.Testimonial>
          <span>
            <BsFillStarFill size={24} /> 5.0 Star Rating
          </span>
          <S.ContainerImage>
            <Image src={Assets.Quote} width='95' height='75' />
          </S.ContainerImage>
          <p>
            “If you&apos;re looking for someone who will challenge your UX/UI
            thinking and really cut to the core of what&apos;s important for
            users, then Jesse is your man. On top of that, he brings a level of
            enthusiasm to the craft that&apos;s energizing for everyone who
            works with him.”
          </p>

          <S.Indicator top={indicatorPosition} />
        </S.Testimonial>
      </S.TestimonialGroup>
    </S.Container>
  )
}
