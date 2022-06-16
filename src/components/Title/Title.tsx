import { InView } from 'react-intersection-observer'
import * as S from './Title.styled'

type Props = {
  children: string
}

const separatorVariant = {
  hidden: {
    width: 0,
  },
  visible: {
    width: '6.4rem',
  },
}

export function Title({ children }: Props) {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <>
          <S.Title ref={ref}>{children}</S.Title>
          {inView && (
            <S.Separator
              initial='hidden'
              animate='visible'
              variants={separatorVariant}
              transition={{ duration: 0.5 }}
            />
          )}
        </>
      )}
    </InView>
  )
}
