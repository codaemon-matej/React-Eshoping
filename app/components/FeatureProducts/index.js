import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from "react-slick";
import history from '../../history';
import { fetchCategoriesRequest } from '../Products/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import Filter from '../Filter';
import Modal from '../Modal';
import ProductDetails from '../ProductDetails';

const FeatureProductsContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;

  .slick-slider {
    display: flex;

    .slick-list {
      overflow: hidden;
      padding: 0 20px;

      .slick-track {
        display: flex;
        .slick-slide {
          width: auto !important;
        }
      }
    }
  }

  .product-list {
    padding: 0 40px 0 0;

    .product-item {
      position: relative;
      width: 100%;
      overflow: hidden;

      &:hover {
        figure {
          img {
            -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
          }

          &:before {
            opacity: 1;
            visibility: visible;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
          }
        }

        .image_overlay {
          opacity: 0.7;
          position: absolute;
        }
      }


      .image_overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(6, 0, 0, 0.71);
        opacity: 0;
        transition: all .3s ease-in-out;
      }

      figure {
        overflow: hidden;
        position: relative;

        img {
          height: 360px;
          -webkit-transition: .3s all ease;
          -o-transition: .3s all ease;
          transition: .3s all ease;
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
      }
    }
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, height:"360px", lineHeight:"360px", display: "block" }}
      onClick={onClick}
    >
    <FontAwesomeIcon className="font-awesome fa-2x" icon={faChevronCircleRight}/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, height:"360px", lineHeight:"360px", display: "block" }}
      onClick={onClick}
    >
    <FontAwesomeIcon className="font-awesome fa-2x" icon={faChevronCircleLeft}/>
    </div>
  );
}

class FeatureProducts extends Component {
  componentWillMount() {
    const { fetchCategoriesRequest } = this.props;
    fetchCategoriesRequest();
  }

  redirectToProducts = () => {
    history.push('/products');
  }

  render() {
    const { categories } = this.props;

    const settings = {
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnFocus: true,
      pauseOnHover: true,
      dots: false,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 3,
      draggable: true,
      swipeToSlide: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    const productItems = categories.map(product => (
      <div className="col-md-4 product-list" key={product.id}>
        <div className="product-item">
          <figure>
            <img src={require(`../../images/products/${product.sku}_1.jpg`)} alt={product.title} className="img-fluid" />  
          </figure>
          <div className="image_overlay"/>
        </div>
      </div>
    ));

    return (
      <FeatureProductsContainer>
        <div className="container">
          <div className="row section-heading">
            <div className="col-md-offset-3 col-md-6 text-center">
              <h3 className="section-sub-title">AWESOME PRODUCTS</h3>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-txt">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
              <p><a className="btn btn-black" href="/" role="button">Get started today</a></p>
            </div>
          </div>
          <div className="row">
            <Slider  {...settings}>
              {productItems}
            </Slider>
          </div>
        </div>
      </FeatureProductsContainer>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.products.items
})

export default connect(mapStateToProps, {fetchCategoriesRequest})(FeatureProducts)
