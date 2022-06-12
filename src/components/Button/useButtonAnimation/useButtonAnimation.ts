import { useState } from 'react'

export function useButtonAnimation() {
  const [isButtonTextVisible, setIsButtonTextVisible] = useState(false)

  function hiddenButtonText() {
    setIsButtonTextVisible(false)
  }

  function showButtonText() {
    setIsButtonTextVisible(true)
  }

  return {
    isButtonTextVisible,
    hiddenButtonText,
    showButtonText,
  }
}
