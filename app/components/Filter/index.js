import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import { filterProducts, filterProductsByCategory, sortProducts } from '../../containers/Products/actions';

const FilterContainer = styled.div`
  .navbar-collapse {
    padding: 0;

    ul {
      width: 100%;
      li {
        width: 100%;
        &:not(:first-child) {
          text-align: left;
        }

        .glyphicon {
          margin-right: 10px;
        }
      }
    }
  }
`;

export class Filter extends Component {
  render() {
    const { filteredProducts, sortProducts, sort, size, products, filterProducts, filterProductsByCategory } = this.props;

    return (
      <FilterContainer>
        <div className="col-sm-3 col-md-3 affix-sidebar">
          <div className="sidebar-nav">
            <div className="navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <span className="visible-xs navbar-brand">Filter</span>
              </div>
              <div className="navbar-collapse collapse sidebar-navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active text-center">
                    <h4>Filter<br /></h4>
                  </li>
                  <li>
                    <a data-toggle="collapse" data-target="#toggleDemo" data-parent="#sidenav01" className="collapsed">
                    <span className="glyphicon glyphicon-cloud"></span> Category <span className="caret pull-right"></span>
                    </a>
                    <div className="collapse" id="toggleDemo">
                      <ul className="nav nav-list">
                        <li><a href="javascript:void(0);" onClick={(e) => filterProductsByCategory(products, "")}>ALL</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => filterProductsByCategory(products, "m")}>Mens</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => filterProductsByCategory(products, "w")}>Womens</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a data-toggle="collapse" data-target="#toggleDemo1" data-parent="#sidenav01" className="collapsed">
                    <span className="glyphicon glyphicon-cloud"></span> Price <span className="caret pull-right"></span>
                    </a>
                    <div className="collapse" id="toggleDemo1">
                      <ul className="nav nav-list">
                        <li><a href="javascript:void(0);" onClick={(e) => sortProducts(filteredProducts, "")}>ALL</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => sortProducts(filteredProducts, "lowest")}>Lowest to highest</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => sortProducts(filteredProducts, "highest")}>Highest to lowest</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a data-toggle="collapse" data-target="#toggleDemo2" data-parent="#sidenav01" className="collapsed">
                    <span className="glyphicon glyphicon-cloud"></span> Size <span className="caret pull-right"></span>
                    </a>
                    <div className="collapse" id="toggleDemo2">
                      <ul className="nav nav-list">
                        <li><a href="javascript:void(0);" onClick={(e) => filterProducts(products, "")}>ALL</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => filterProducts(products, "x")}>XS</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => filterProducts(products, "s")}>S</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => filterProducts(products, "m")}>M</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => filterProducts(products, "l")}>L</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => filterProducts(products, "xl")}>XL</a></li>
                        <li><a href="javascript:void(0);" onClick={(e) => filterProducts(products, "xxl")}>XXL</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FilterContainer>
    );
  }
}

const mapStateToProps = state => ({
  products: state.allProducts.items,
  filteredProducts: state.allProducts.filteredItems,
  size: state.allProducts.size,
  sort: state.allProducts.sort,
});

export default connect(mapStateToProps, { filterProducts, filterProductsByCategory, sortProducts })(Filter);
