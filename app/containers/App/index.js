/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import GlobalStyle from '../../global-styles';
import eShopTheme from '../../themes/eShop-theme';

const StyledHeader = styled(Header)`
  padding: 35px 0 0;

  button {
    float: right;
  }

  .logo {
    img {
      height: 100px;
      margin-top: -40px;
    }
  }

  .login-container {
    margin-left: 15px;
    list-style: none;
  }
`;

StyledHeader.displayName = 'StyledHeader';

/* eslint-disable no-param-reassign */
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { activeMenu: false }
    this.handleClick = this.handleClick.bind(this);
    this.navbarRef = React.createRef();
  }

  handleClick = (evt) => {
    const { target } = evt;
    if (this.navbarRef.current && this.navbarRef.current.contains(target)){
      this.setState({ activeMenu: true });
    } else {
      this.setState({ activeMenu: false });
    }
  }

  render() {
    const { store, children } = this.props;
    const { activeMenu } = this.state;
    return (
      <ThemeProvider theme={eShopTheme}>
        <div className="App" onClick={this.handleClick}>
          <GlobalStyle />
          <StyledHeader
            navbarRef={this.navbarRef}
            store={store}
            activeMenu={activeMenu}
          />
          <section className="App-body" >{children}</section>
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App
