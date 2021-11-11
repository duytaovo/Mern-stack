import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { path } from 'src/constansts/path'
import usePopover from 'src/hooks/usePopover'
import useQuery from 'src/hooks/useQuery'
import Navbar from '../Navbar/Navbar'
import Popover from '../Popover/Popover'
import * as S from './Header.style'

export default function Header() {
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()
  const query = useQuery()

  useEffect(() => {
    const { name = '' } = query
    setSearchValue(name)
  }, [query])

  const onChangeSearch = event => {
    setSearchValue(event.target.value)
  }
  const search = event => {
    event.preventDefault()
    history.push(path.home + `?name=${searchValue}`)
  }
  return (
    <S.StyledHeader>
      <div className="container">
        <Navbar />
        <S.SearchWrap>
          <S.Logo to="/">
            <img
              // src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.6435-9/110140856_591562328462552_219365682392092108_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hjJxPuPCNQQAX9aspIm&_nc_oc=AQm_cSmoORa7fNaDUqLiy126y472QhYqQ2S6sutnVjpOwRrSTzu7mSkGAv-Z-I2I9MW28rX-VYTCp4UbsLQeBQsq&tn=mVQDKcn0O_mJaiN3&_nc_ht=scontent.fsgn5-7.fna&oh=49db5fb4dcb6637cb411d79b4d2bf94b&oe=6131A2B1"
              src="/logo.png"
              alt=""
            ></img>
          </S.Logo>
          <S.StyledForm onSubmit={search}>
            <S.StyledInput
              placeholder="Tìm kiếm sản phẩm"
              value={searchValue}
              onChange={onChangeSearch}
            />
            <S.StyledButton type="submit">
              <svg
                height={19}
                viewBox="0 0 19 19"
                width={19}
                className="shopee-svg-icon "
              >
                <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-1016 -32)">
                    <g>
                      <g transform="translate(405 21)">
                        <g transform="translate(611 11)">
                          <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                          <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </S.StyledButton>
          </S.StyledForm>
          <S.Cart>
            <S.CartContainer>
              <S.CartIcon>
                <svg
                  viewBox="0 0 26.6 25.6"
                  className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
                >
                  <polyline
                    fill="none"
                    points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth="2.5"
                  />
                  <circle cx="10.7" cy={23} r="2.2" stroke="none" />
                  <circle cx="19.7" cy={23} r="2.2" stroke="none" />
                </svg>
              </S.CartIcon>
              <Popover>
                <S.PopoverContent>
                  <S.PopoverTitle>Sản phẩm mới thêm</S.PopoverTitle>

                  <S.PopoverFooter>
                    <S.MoreProduct></S.MoreProduct>
                    <S.ButtonShowCart>Xem giỏ hàng</S.ButtonShowCart>
                  </S.PopoverFooter>
                </S.PopoverContent>
              </Popover>
            </S.CartContainer>
          </S.Cart>
        </S.SearchWrap>
      </div>
    </S.StyledHeader>
  )
}
