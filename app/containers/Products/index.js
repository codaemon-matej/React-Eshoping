import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchProductsRequest, compareProducts } from './actions';
import { addToCart } from '../../containers/Cart/actions';
import { formatCurrency } from '../../utils/general';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import Modal from '../../components/Modal';
import ProductDetails from '../../components/ProductDetails';
import Compare from '../../components/Compare';

const ProductsContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;

  img {
    height: 250px;
  }

  .product-list {

    .product-item {
      margin-bottom: 30px;
      text-align: center;
      
      .btn {
        margin: 0 5px;
      }

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

        .btn-compare {
          display: block;
          position: absolute;
          top: 35%;
          right: 30%;
          z-index: 2;

          @media ${ /* istanbul ignore next */ props => props.theme.maxPhablet} {
            right: 40%;
          }
        }
      }

      .btn-compare {
        display: none;
      }

      &.compare {
        .image_overlay {
          opacity: 0.7;
          position: absolute;
          box-shadow: 0 10px 6px -6px #777;
        }
        .btn-compare {
          display: block;
          position: absolute;
          top: 35%;
          right: 30%;
          z-index: 2;

          button {
            outline: none;
          }
        }
      }

      .image_overlay {
        top: 0;
        left: 0;
        width: 98%;
        height: 60%;
        background: #0a0300;
        opacity: 0;
        transition: all 200ms ease-out;
      }


      figure {
        overflow: hidden;
        position: relative;
        margin-bottom: 30px;

        img {
          -webkit-transition: .3s all ease;
          -o-transition: .3s all ease;
          transition: .3s all ease;
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }

        &:before {
          z-index: 2;
          -webkit-transition: .4s all ease;
          -o-transition: .4s all ease;
          transition: .4s all ease;
          -webkit-transform: scale(1.05);
          -ms-transform: scale(1.05);
          transform: scale(1.05);
          position: absolute;
          content: "";
          border: 4px solid #f16821;
          left: 20px;
          right: 20px;
          top: 20px;
          bottom: 20px;
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }
`;

class Products extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      product: null,
    };
    this.showModal= this.showModal.bind(this);
  }

  componentWillMount() {
    const { fetchProductsRequest } = this.props;
    fetchProductsRequest();
  }

  showModal(item) {
    this.setState((previousState) => ({
      ...previousState,
      product: item,
    }));
  };

  render() {
    const { compPro, products, compareProducts, addToCart, cartItems } = this.props;
    const { product } = this.state;
    const compareP = compPro.filter(product => product.compare);
    const productItems = products.map(product => (
      <div className="col-lg-4 col-sm-6 col-xs-12 product-list" key={product.id}>
        <div className={`product-item ${product.compare && 'compare'}`}>
          <figure>
            <img src={require(`../../images/products/${product.sku}_1.jpg`)} alt={product.title} className="img-fluid" />  
          </figure>
          <div className="image_overlay"/>
          <div className="btn-compare">
            <button type="button" className={`btn-white ${product.compare && 'btn-remove'}`} onClick={()=>compareProducts(products, product)} >{product.compare ? 'Remove' : 'Compare' }</button>
          </div>
          <div>
            <h4>{product.title}</h4>
            <div>
              <span>{formatCurrency(product.price)}</span>
            </div>
            <p>{product.description}</p>
            <div>
              <button type="button" onClick={()=>addToCart(cartItems, product)} className="btn btn-black">Cart</button>
              <button type="button" className="btn btn-black" onClick={ () => {this.showModal(product)} } data-toggle='modal' data-target='#viewProduct'>View</button>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <ProductsContainer>
        <div className="container">
          <div className="row section-heading">
            <div className="col-md-offset-3 col-md-6 text-center">
              <h3 className="row section-sub-title">POPULAR PRODUCTS</h3>
              <h2 className="row section-title">Our Products</h2>
              <p className="section-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
            </div>
          </div>
          <div className="row affix-row">
            <Filter />
            <div className="col-sm-9 col-md-9 affix-content">
              <div className="page-header">
                <div>{products.length} items found.</div>
              </div>
              {productItems}
              {compareP.length >= 2 &&
                <Compare products={compareP}/>
              }
              {product && <Modal id="viewProduct" ModalBody={ProductDetails} addToCart={addToCart} cartItems={cartItems} product={product}/>}
            </div>
          </div>
        </div>
        <Footer />
      </ProductsContainer>
    );
  }
}

const mapStateToProps = state => ({
  products: state.allProducts.filteredItems,
  cartItems: state.cart.items,
  compPro: state.allProducts.products,
})

export default connect(mapStateToProps, {fetchProductsRequest, addToCart, compareProducts })(Products)
