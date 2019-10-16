import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../config/routes';
import { Icon, Grid } from '@material-ui/core';
import Logo from '../../static/images/studio.png';
import StudioLogo from './logo';

type NavigationProps = {

}

const Navigation: React.ComponentType<NavigationProps> = () => (
  <Grid container justify='center'>
    <nav className="navbar navbar-expand-sm navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse navigation" id="navbarContent">
        <ul className="navbar-nav navigation__Menu">
          {
            Object.keys(ROUTES).map((page: string, index: number) =>
              <li key={index} className="nav-item">
                <Link className="nav-link navigation__Option" to={ROUTES[page].link}>
                  <Icon>{ROUTES[page].icon}</Icon>
                  {ROUTES[page].label}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </nav>
  </Grid>

)

export default Navigation;