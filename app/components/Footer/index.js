import React from 'react';
import styled from 'styled-components';

const Footer = ({ className }) => (
  <footer className={`footer ${className}`}>
    <div className="container">
      <div className='row'>
        <div className="col-sm-12 text-center">
          &copy;{new Date().getFullYear()} E-Shopping.com, all rights reserved
        </div>
      </div>
    </div>
  </footer>
);

const StyledFooter = styled(Footer)`
  padding-top: 50px;
  &.footer {
    background-color: #f5f5f5;
    padding: 40px;
  }
`;

export default StyledFooter
