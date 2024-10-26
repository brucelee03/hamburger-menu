import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="menu-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="menu-option-list">
              <li>
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome className="home-icon" />
                  <p className="option">Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill className="info-icon" />
                  <p className="option">About</p>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
