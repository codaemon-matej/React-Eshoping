/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MenuUl = styled.ul`
  position: relative;

  @media ${  /* istanbul ignore next */ props => props.theme.tablet} {
    margin-top: 10px;
  }
`;

const MenuLi = styled.li`
  list-style-type: none;
  display: inline;
  float: left;
  margin-left: 30px;

  a {
    font-family: ${(props) => (props.theme.mainFont)};
    font-size: 18px;
    text-decoration: none;
    color: black;

    @media ${  /* istanbul ignore next */ props => props.theme.maxTablet} {
      font-size: 16px;
    }

    &:hover {
      color: #f16821;
    }

    svg {
      color: black;
      margin: 0;
    }
  }

  &.active {
    a {
      color: ${  /* istanbul ignore next */ props => props.theme.black};
      border-bottom: 2px solid ${  /* istanbul ignore next */ props => props.theme.lightOrange};
    }
  }

  &.dropdown {
    list-style-type: none;
    display: inline;
    float: left;
    margin-left: 30px;

    .dropdown-menu {
      box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.15);
      border: none;
      min-width: auto;
      padding: 15px 0;
      transform: translate3d(-30px, 22px, 0) !important;
      top: 7px !important;

      li {
        margin-left: 0;
        width: -webkit-fill-available;

        &:hover {
          background-color: ${  /* istanbul ignore next */ props => props.theme.bgBlueLink};
        }

        a {
          color: ${  /* istanbul ignore next */ props => props.theme.blueLink};
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -0.4px;
          border: none;

          &:hover {
            border: none;
          }
        }
      }
    }
  }
`;

class MenuList extends Component {

  render() {
    const { logout } = this.props;

    return (
      <MenuUl>
        {/* eslint-disable-next-line no-unused-expressions */}
        <MenuLi>
          <Link to={ {pathname: "/"} }>Home</Link>
        </MenuLi>
        <MenuLi>
          <Link to={ {pathname: "/products"} }>Products</Link>
        </MenuLi>
        
        <MenuLi>
          <Link to={ {pathname: "/"} }>About Us</Link>
        </MenuLi>

        <MenuLi>
          <Link to={ {pathname: "/"} }>Contact Us</Link>
        </MenuLi>

        <MenuLi className="dropdown">
          <Link className="dropdown-toggle" to={ {pathname: "#"} } role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account <FontAwesomeIcon className="font-awesome" icon={faCaretDown}/>
          </Link>
          <span className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <MenuLi className="dropdown-item">
              <Link to="/profile">Settings</Link>
            </MenuLi>
            <MenuLi className="dropdown-item" onClick={ (evt) => {logout(evt); } }>
              <Link to="/login">Logout</Link>
            </MenuLi>
          </span>
        </MenuLi>
      </MenuUl>
    )
  }
}

export default withRouter(MenuList);
