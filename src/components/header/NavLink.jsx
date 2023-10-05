import PropTypes from 'prop-types'

export default function NavLink( { text, ...props } ) {
  return (
    <a {...props}>{ text }</a>
  )
}


NavLink.propTypes = {
  // ref: PropTypes.any,
  // linkUrl: PropTypes.string,
  text: PropTypes.string,
  // className: PropTypes.string
}