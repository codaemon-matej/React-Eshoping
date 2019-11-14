/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuUl = styled.ul`
  position: absolute;
  width: 210px;
  top: 22px;
  box-shadow: 0 2px 10px 0 rgba(155,155,155,0.40);
  border-radius: 10px;
  right: 15px;
  cursor: pointer;
  padding: 10px 20px;
  background: #FFF;
  z-index: 999;

  @media ${  /* istanbul ignore next */ props => props.theme.maxPhablet} {
    position: fixed;
    top: 0;
    width: 252px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    right: 0px;
    height: 100vh;
  }
`;

const MenuLi = styled.li`
  list-style-type: none;
  margin: 10px -20px 10px -20px;
  float: none;
  padding: 3px 20px;

  a {
    color: black;
    font-size: 18px;
    letter-spacing: -0.1px;
    text-decoration: none;
    padding-right: 90px;

    &:focus {
      color: ${  /* istanbul ignore next */ props => props.theme.black};
      border-left: 2px solid ${  /* istanbul ignore next */ props => props.theme.lightOrange};
      outline: none;
    }
  }
`;

export default class MenuList extends Component {
  render() {
    const { logout } = this.props;
    return (
      <MenuUl>
        {/* eslint-disable-next-line no-unused-expressions */}
        <MenuLi>
          <a href="#">Products</a>
        </MenuLi>
        <MenuLi onClick={ (evt) => {logout(evt);} }>
          <Link to={ {pathname: "/login"} } >Logout</Link>
        </MenuLi>
      </MenuUl>
    )
  }
}
