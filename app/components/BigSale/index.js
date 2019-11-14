import React from 'react';
import styled from 'styled-components';

const modelBgImg1=require("../../images/model_1_bg.jpg");

const BigSaleContainer = styled.div`
  .feature-txt {
    margin-top: 50px;

    .feature-img {
      display: inline-block;
      overflow: hidden;
      padding: 0;

      @media ${ /* istanbul ignore next */ props => props.theme.maxPhablet} {
        padding: 0 20px;
      }

      &:hover {
        img {
          transform: scale(1.3);
          transform-origin: 50% 50%;
        }
      }

      img {
        height: 500px;
        display: block;
        transition: transform .4s;

        @media ${ /* istanbul ignore next */ props => props.theme.maxPhablet} {
          height: 280px;
        }
      }
    }

    .about-product {
      padding: 50px;

      .btn {
        margin: 20px 5px;
      }

      .price {
        font-size: 16px;

        h3 {
          color: black;
        }
        
        del {
          color: #adb5bd;
          margin-right: 10px;
        }
      }
    }
  }
`;

const BigSale = () => (
  <BigSaleContainer>
    <div className="container">        
      <div className="row section-heading">
        <div className="col-md-offset-3 col-md-6 text-center">
          <h3 className="row section-sub-title">AWESOME PRODUCTS</h3>
          <h2 className="row section-title">Big Sale</h2>
          <p className="section-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        </div>
      </div>

      <div className="row feature-txt">
        <div className="col-lg-5 feature-img">
          <img src={modelBgImg1} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-7 about-product">
          <h2>About This Product</h2>
          <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>
          
          <div className="price"> 
            <h3>Price:</h3>
            <div><del>$269.00</del> $69.00</div>
          </div>
          <p>
            <a href="/" className="btn btn-black">View Details</a>
            <a href="/" className="btn btn-black">Add To Cart</a>
          </p>
        </div>
      </div>
    </div>
  </BigSaleContainer>
)

export default BigSale;
