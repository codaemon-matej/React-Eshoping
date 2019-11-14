import React from 'react';
import styled from 'styled-components';

const BarIconContainer = styled.div`
  z-index: 9999;
  span {
    width: 16px;
    height: 3px;
    background: black;
    display: block;
    margin-bottom: 3px;
  }
`;

const Icon = styled.div`
  cursor: pointer;
  height: 18px;
  width: 16px;
  &.show {
    margin-top: 10px;

    span {
      top: 20%;
      position: absolute;
      transform-origin: center center;

      @media ${  /* istanbul ignore next */ props => props.theme.maxPhablet} {
        position:fixed;
        top: 25px;
        margin-left: -10px;
      }
    }
    span:nth-child(1) {
      transform: rotate(-45deg);
      transform-origin: center center;
    }

    span:nth-child(2) {
      display: none;
    }

    span:nth-child(3) {
      transform: rotate(45deg);
    }
  }
`;

const BarIcon = ({ isActive }) => (
  <BarIconContainer>
    <Icon className={isActive ? 'show' : ''}>
      <span></span>
      <span></span>
      <span></span>
    </Icon>
  </BarIconContainer>
)

export default BarIcon
