import { MouseEvent, RefObject, useEffect, useState } from 'react'

export function useIndicator(
  ref: RefObject<HTMLUListElement>,
  valueToCenter: number,
) {
  const [indicatorPosition, setIndicatorPosition] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const firstChild = ref.current?.children[0]

      if (!firstChild) return

      const refTop = ref.current?.getBoundingClientRect().top || 0
      const { top } = firstChild.getBoundingClientRect()

      const position = top - refTop + valueToCenter

      setIndicatorPosition(position)
    }
  }, [ref, valueToCenter])

  function changeIndicatorPosition(event: MouseEvent<HTMLLIElement>) {
    const { top } = event.currentTarget.getBoundingClientRect()
    const refTop = ref.current?.getBoundingClientRect().top || 0

    const position = top - refTop + valueToCenter

    setIndicatorPosition(position)
  }

  return {
    indicatorPosition,
    changeIndicatorPosition,
  }
}
