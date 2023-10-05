import { headerSection } from '@assets/data';
import PropTypes from 'prop-types'
import NavLink from './NavLink';
import { useState } from 'react';

export default function Navbar ( { onClick, className } ) {

  const [ active, setActive ] = useState( null )


  return (
    <nav onClick={onClick} className={className}>
      {
        headerSection.map( ( link ) => (
          <NavLink onClick={() => setActive(link)} className={`nav__link ${active == link && "active" }`} key={link.id} href={link.url} text={link.title} />
        ))
      }
    </nav>
  )
}

Navbar.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
}