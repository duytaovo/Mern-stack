import React from 'react'
import PropTypes from 'prop-types'
import HeaderRegister from '../../components/HeaderRegister/HeaderRegister'
import Footer from '../../components/Footer/Footer'

function RegisterLayout({ title, children }) {
  return (
    <div>
      <HeaderRegister title={title} />
      {children}
      <Footer />
    </div>
  )
}

RegisterLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default RegisterLayout
