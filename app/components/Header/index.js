import React from 'react';
import { connect } from 'react-redux';

import { logoutRequest } from '../../containers/Login/actions';
import logo from '../../images/logo.png';
import NavigationBar from '../NavigationBar';

export const Header = function Header(props){
  const logout = evt => {
    evt.preventDefault();
    props.store.dispatch(logoutRequest());
  };

  const { loggedIn, className, navbarRef, activeMenu } = props;

  return (
    <header className={loggedIn ?  className : `${className} hidden`}>
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-xs-10">
            <li className="login-container">
              { loggedIn &&
                <NavigationBar
                  navbarRef={navbarRef}
                  logout={logout}
                  activeMenu={activeMenu}
                />
              }
            </li>
          </div>
        </div>
      </div>
    </header>
  )
};

const mapStateToProps = state => ({
  loggedIn: state.client.loggedin,
})

export default connect(mapStateToProps)(Header)
