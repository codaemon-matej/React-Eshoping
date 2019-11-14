import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BarIcon from './barIcon';
import CartLogo from '../../images/cart.png';
import MenuList from './menuList';
import DesktopMenu from './desktopMenu';
import { getDevice } from '../../utils/general';

const NavBarContainer = styled.div`
  display: flex;

  @media ${  /* istanbul ignore next */ props => props.theme.maxPhablet} {
    float: right;
  }

  .title {
    margin-right: 5px;
    font-family: ${  /* istanbul ignore next */ props => props.theme.mainFont};
    font-weight: bold;
    font-size: 15px;
    color: ${  /* istanbul ignore next */ props => props.theme.black};
    letter-spacing: 0.38px;
  }

  .cart {
    right: 0;
    position: absolute;
    margin-top: -10px;

    img {
      height: 50px;
    }
  }

  .count {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background: #f16821;
    vertical-align: middle;
    top: -6px;
    right: 0px;
    position: absolute;
    line-height: 20px;
  }
`;

export class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isMobile: null,
    };
  }

  componentDidMount() {
    this.setDevice();
    window.addEventListener("resize", this.setDevice.bind(this));
  }
  
  // Function is created if user change the viewport
  setDevice() {
    this.setState({isMobile: getDevice()});
  }
  
  render() {
    const { isMobile } = this.state;
    const { navbarRef, logout, activeMenu, cartItems } = this.props;
    return (
      <span>
        {isMobile === 'mobile' ?
          <NavBarContainer ref={ activeMenu ? React.createRef() : navbarRef }>
            <div className="title">MENU</div>
            <BarIcon isActive={activeMenu} />
            {activeMenu &&
              <MenuList logout={logout} />
            }
          </NavBarContainer>
        : <NavBarContainer>
            <DesktopMenu
              navbarRef={navbarRef}
              logout={logout}
              activeMenu={activeMenu}
            />
            <Link to={ {pathname: "/cart"} }>
              <span className="cart">
                <img src={CartLogo} alt="" />
                <div className="count">{cartItems.length}</div>
              </span>
            </Link>
          </NavBarContainer>
        }
      </span>
    )
  }
}

const mapStateToProps = state => ({
   cartItems: state.cart.items,
})

export default connect(mapStateToProps)(NavigationBar)
