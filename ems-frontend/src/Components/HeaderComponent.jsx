import React from 'react'
import PropTypes from 'prop-types'

const HeaderComponent = props => {
  return (
    <div >
        <nav className='navbar navbar-dark bg-dark'>
        <a className="navbar-brand" href="https://www.google.com">Employee Management System</a>
        </nav>
    </div>
  )
}

HeaderComponent.propTypes = {}

export default HeaderComponent