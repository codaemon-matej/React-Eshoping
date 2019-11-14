import React from 'react';
import styled from 'styled-components';
import Slider1 from '../../images/slider_1.jpg';
import Slider2 from '../../images/banner_2.jpg';
import Slider3 from '../../images/banner_3.jpg';
import Slider4 from '../../images/banner_4.jpg';

const CarouselContainer = styled.div`
  &.carousel {
    height: 500px;

    .carousel-inner {
      .overlay {
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
      }
      .item {
        height: 500px;
        background-color: #777;

        img {
          position: absolute;
          top: 0;
          left: 0;
          min-width: 100%;
          height: 500px;
        }

        .carousel-caption {
          z-index: 10;
          text-shadow: none;
          left: 18%;
          width: 400px;
          top: 100px;

          @media ${ /* istanbul ignore next */ props => props.theme.maxPhablet} {
            width: auto;
          }

          h1, p {
            color: black;
          }
        }
      }
    }
  }
`;

const Carousel = () => (
  <CarouselContainer id="myCarousel" className="carousel fade-carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img className="first-slide" src={Slider1} alt="First slide" />
        <div className="container">
          <div className="carousel-caption">
            <h1>Example headline.</h1>
            <p>Note: If viewing this page via a Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
            <p><a className="btn btn-black" href="/" role="button">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="second-slide" src={Slider3} alt="Second slide" />
        <div className="container">
          <div className="carousel-caption">
            <h1></h1>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="third-slide" src={Slider4} alt="Third slide" />
        <div className="container">
          <div className="carousel-caption">
            <h1>Example headline.</h1>
            <p>Note: If viewing this page via a Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
            <p><a className="btn btn-black" href="/" role="button">Learn more</a></p>
          </div>
        </div>
      </div>
    </div>
    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </CarouselContainer>
)

export default Carousel;
