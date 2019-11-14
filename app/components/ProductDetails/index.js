import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { formatCurrency } from '../../utils/general';

const ProductDetailsContainer = styled.div`
  .card {
    line-height: 1.5em;
    text-align: left;
    padding: 0 50px;

    .preview {
      display: flex;
      flex-direction: column;

      .preview-pic {
        flex-grow: 1;

        &.tab-content {
          overflow: hidden;
          text-align: center;
        }

        img {
          height: 500px;
          float: right;
        }
      }

      .preview-thumbnail {
        position: fixed;
        width: 7%;

        &.nav-tabs {
          border: none;

          li {
            width: 80px;
            margin-right: 2.5%;
            margin-bottom: 10px;

            &.active {
              border: 2px solid #ccc;
              box-shadow: inset 0 0 5px #ccc;
            }

            &:last-of-type {
              margin-right: 0;
            }

            a {
              padding: 0;
              margin: 0;
              border: none;
              text-align: -webkit-center;

              &:hover {
                background-color: white;
              }
            }

            img {
              display: block;
              height: 100px;
            }
          }
        }
      }
    }

    img {
      max-width: 100%;
    }

    .details {
      display: flex;
      flex-direction: column;

      .sizes {
        margin-bottom: 20px;

        .size {
          margin: 0 5px;
        }
      }

      .rating {
        margin-bottom: 20px;

        .font-awesome {
          margin-right: 5px;

          &.checked {
            color: #ff9f1a;
          }
        }
      }
    }
  }
`;

const ProductDetails = ({ product, addToCart, cartItems }) => (
  <ProductDetailsContainer>
    <div className="container">        
      <div className="card">
        <div className="row">
          <div className="preview col-md-6">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1"><img src={require(`../../images/products/product-detail-01.jpg`)} /></div>
              <div className="tab-pane" id="pic-2"><img src={require(`../../images/products/product-detail-02.jpg`)} /></div>
              <div className="tab-pane" id="pic-3"><img src={require(`../../images/products/product-detail-03.jpg`)} /></div>
            </div>
            <ul className="preview-thumbnail nav nav-tabs">
              <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={require(`../../images/products/product-detail-01.jpg`)} /></a></li>
              <li><a data-target="#pic-2" data-toggle="tab"><img src={require(`../../images/products/product-detail-02.jpg`)} /></a></li>
              <li><a data-target="#pic-3" data-toggle="tab"><img src={require(`../../images/products/product-detail-03.jpg`)} /></a></li>
            </ul>
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">{product.title}</h3>
            <div className="rating">
              <div className="stars">
                <FontAwesomeIcon className="font-awesome checked" icon={faStar}/>
                <FontAwesomeIcon className="font-awesome checked" icon={faStar}/>
                <FontAwesomeIcon className="font-awesome checked" icon={faStar}/>
                <FontAwesomeIcon className="font-awesome" icon={faStar} />
                <FontAwesomeIcon className="font-awesome" icon={faStar} />
              </div>
              <span className="review-no">41 reviews</span>
            </div>
            <p className="product-description">{product.description}</p>
            <h4 className="price">CURRENT PRICE: <span>{formatCurrency(product.price)}</span></h4>
            <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
            <h5 className="sizes">SIZES :
              {product.availableSizes.map(size => (
                <span className="size" data-toggle="tooltip" title="small" key={size}>{size}</span>
              ))}
            </h5>
            <div>
              <button className="btn btn-black" type="button" onClick={(e)=>addToCart(cartItems, product)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProductDetailsContainer>
)

export default ProductDetails;
