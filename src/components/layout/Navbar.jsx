import React from 'react';
import PropTypes from 'prop-types'

const Navbar = ({icon, title}) => {
    return (
      <nav className='navbar bg-dark'>
        <h1>
          < i className={icon} /> {title}
        </h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    )
};


Navbar.defaultProps = {
  title: 'Sugar Finder24',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Navbar
