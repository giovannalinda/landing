import * as S from './Title.styled'

type Props = {
  children: string
}

export function Title({ children }: Props) {
  return (
    <>
      <S.Title>{children}</S.Title>
      <S.Separator />
    </>
  )
}
