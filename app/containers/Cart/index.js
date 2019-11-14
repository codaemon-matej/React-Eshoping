import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { formatCurrency } from '../../utils/general';
import {removeFromCart} from './actions';
import Footer from '../../components/Footer';

const CartContainer = styled.div`
  text-align: center;

  .panel {
    .item {
      padding: 20px 0;
      box-shadow: 0 0 10px 0 #777;
      margin-bottom: 20px;
      border-radius: 5px;
      border: none;
      line-height: 245px;

      .btn-link {
        color: red;
        margin-top: 5px;
        outline: none;
      }
    }

    .total {
      padding: 20px 0 0;
    }
  }
`;

const Cart = ({ cartItems, removeFromCart }) => (
  <CartContainer>
    {cartItems.length === 0 &&
      <div className="alert alert-info">Basket is empty</div>
    }
    {cartItems.length > 0 &&
        <div className="container">
        <div className="row section-heading">
          <div className="col-xs-12">
            <div className="panel">
              <div className="panel-body">
                {cartItems.map(item => (
                  <div className="row item">
                    <div className="col-xs-2"><img className="img-responsive" src={require(`../../images/products/${item.sku}_1.jpg`)} alt={item.title} />
                    </div>
                    <div className="col-xs-4">
                      <h4 className="product-name"><strong>{item.title}</strong></h4><h4><small>{item.description}</small></h4>
                    </div>
                    <div className="col-xs-6">
                      <div className="col-xs-6 text-right">
                        <h5><strong>{formatCurrency(item.price)} <span className="text-muted">x</span></strong></h5>
                      </div>
                      <div className="col-xs-4">
                        <input type="text" className="form-control input-md" value={item.count} />
                      </div>
                      <div className="col-xs-2">
                        <button type="button" className="btn btn-link btn-xs" onClick={(e) => removeFromCart(cartItems, item)}>
                          <span className="glyphicon glyphicon-trash"> </span>
                        </button>
                      </div>
                    </div>
                  </div>))
                    }
                    <div className="row total">
                  <div className="text-center">
                    <div className="col-xs-9">
                      <h5 className="text-right">Total items:</h5>
                    </div>
                    <div className="col-xs-3">
                      <button type="button" className="btn btn-default btn-md btn-block">
                        {cartItems.length}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <div className="row text-center">
                  <div className="col-xs-9">
                    <h4 className="text-right">Total <strong>{formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}</strong></h4>
                  </div>
                  <div className="col-xs-3">
                    <button type="button" className="btn btn-black">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    <Footer />
  </CartContainer>
)

const mapStateToProps = state => ({
   cartItems: state.cart.items,
})
export default connect(mapStateToProps, {removeFromCart})(Cart);
