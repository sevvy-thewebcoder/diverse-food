import { headerSection } from '@assets/data';
import PropTypes from 'prop-types'
import NavLink from './NavLink';

export default function Navbar ( { onClick, className } ) {

  return (
    <nav onClick={onClick} className={className}>
      {
        headerSection.map( ( link ) => (
          <NavLink className={`nav__link`} key={link.id} href={link.url} text={link.title} />
        ))
      }
    </nav>
  )
}

Navbar.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
}