import React from 'react';
import styled from 'styled-components';

const bgImg=require("../../images/hero_2.jpg");

const SiteBlocksContainer = styled.div`
  .site-blocks-cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    background-position: center center;
    background-image: url(${bgImg});
    background-attachment: fixed;
    color: white;
    text-align: center;

    &.overlay {
      position: relative;

      &:before {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.4);
      }
    }

    .email-field {
      justify-content: center;
      display: flex;
      margin-bottom: 10px;

      input {
        background: none;
        border-width: 2px;
        border-color: #fff;
        color: #fff;
        height: 42px;
        border-radius: 0;
      }
    }
  
    &.inner-page-cover {
      .container {
        .row {
          min-height: 400px;
          height: calc(20vh);
        }
      }
    }

    form {
      position: relative;
      margin-top: 100px;
      text-align: -webkit-center;

      .form-control {
        width: 500px;
        margin-bottom: 20px;

        @media ${ /* istanbul ignore next */ props => props.theme.maxPhablet} {
          width: auto;
        }
      }

      h2 {
        margin-bottom: 30px;
      }

      p {
        font-size: 18px;
      }

      .btn {
        margin-bottom: 20px;
      }
    }
  }
`;

const SiteBlocks = () => (
  <SiteBlocksContainer>
     <div className="site-blocks-cover inner-page-cover overlay">
      <div className="container">
        <div className="row">
          <form>
            <h2>Get notified on each updates.</h2>
            <div className="email-field">
              <input type="text" className="form-control" placeholder="Enter your email address" />
              <button type="submit" className="btn btn-white">SUBSCRIBE</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam<br/>doloremque ducimus tempora.</p>
          </form>
        </div>
      </div>
    </div>
  </SiteBlocksContainer>
)

export default SiteBlocks;
