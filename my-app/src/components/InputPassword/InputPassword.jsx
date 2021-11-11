import React, { useState } from 'react'
import * as S from './InputPassword.style'

export default function InputPassword({ ...props }) {
  const [focus, setFocus] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(false)
  const toggleVisiblePassword = () => {
    setVisiblePassword(visiblePassword => !visiblePassword)
  }
  return (
    <S.FormControl focus={focus}>
      <input
        {...props}
        type={visiblePassword ? 'text' : 'password'}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {/* <button
        type="button"
        onClick={toggleVisiblePassword}
        tabIndex="-1"
      ></button> */}
    </S.FormControl>
  )
}
