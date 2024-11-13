import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Map, Feather, Smile, GitHub, Activity } from 'react-feather'
import logo from '../../../images/logo_datagda.png';
import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
          <header className="site-header">
            <div className="container">
              <div className="site-header-inner">
                <div className="brand header-brand">
                  <h1 className="m-0">
                    <span className="landing__main-title">
                    <Link to="/">
                    <img alt="" className="landing__strava" src={logo} />
                    </Link>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </header>

          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/synthese" className="lined-link" activeClassName="active"> <User /> <span> Synthèse </span> </Link></li> 
              <li><Link to="/stats" className="lined-link" activeClassName="active"> <GitHub /> <span> Les stats </span> </Link></li>  
              <li><Link to="/maps" className="lined-link" activeClassName="active"> <Map /> <span> La maps </span> </Link></li>  
              <li><Link to="/perf" className="lined-link" activeClassName="active"> <Activity /> <span> Performance </span> </Link></li>
     
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
