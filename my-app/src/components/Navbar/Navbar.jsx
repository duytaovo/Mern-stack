import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './Navbar.style'
import { path } from 'src/constansts/path'
import { useDispatch } from 'react-redux'
import { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import usePopover from 'src/hooks/usePopover'
import { logout } from 'src/redux/auth.slice'
import Popover from '../Popover/Popover'

export default function Navbar() {
  const authenticated = useAuthenticated()
  const { activePopover, showPopover, hidePopover } = usePopover()
  const profile = useSelector(state => state.auth.profile)
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())
  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="./logo.png" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                <S.UserLink to={path.purchase}>Đơn mua</S.UserLink>
                <S.UserButton onClick={handleLogout}>Đăng xuất</S.UserButton>
              </Popover>
            </S.User>
          </li>
        )}
        {!authenticated && (
          <Fragment>
            <li>
              <S.Navlink to={path.register}>Đăng ký</S.Navlink>
            </li>
            <li>
              <S.Navlink to={path.login}>Đăng nhập</S.Navlink>
            </li>
          </Fragment>
        )}
      </S.NavMenu>
    </S.Navbar>
  )
}
