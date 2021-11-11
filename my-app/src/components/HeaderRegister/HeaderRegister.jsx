import React from 'react'
import PropTypes from 'prop-types'
import * as S from './HeaderRegister.style'
import { Link } from 'react-router-dom'
export default function HeaderRegister({ title }) {
  return (
    <S.Header>
      <S.Container className>
        <S.HeaderBrand>
          <S.HeaderImage>
            <img src="./logo.png" alt="" />
          </S.HeaderImage>
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.HeaderBrand>
        <Link to="" className="link">
          Helper
        </Link>
      </S.Container>
    </S.Header>
  )
}
HeaderRegister.propTypes = {
  title: PropTypes.string
}
