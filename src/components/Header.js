import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onFind, showFind }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showFind ? '#c01414' : 'green'}
          text={showFind ? 'Close' : 'Find'}
          onClick={onFind}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Shopping online',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
