import React from 'react';
import styled from 'styled-components';

const CompareContainer = styled.div`
  &.compare {
    table {
      border: 2px solid #eee;
      font-size: 18px;

      tr > td,
      tr > th {
        padding-top: 25px;
        padding-bottom: 25px;
        text-align: center;
      }

      th[scope="row"] {
        font-size: 20px;
        color: #393c45;
        font-weight: normal;
        background-color: #f9f9f9;
        border: 1px solid #eee;
        text-align: left;
        padding-left: 45px;
      }

      tr {
        &.condition {
          color: #fff;
          font-size: 20px;
        }

        &.colors span {
          height: 20px;
          width: 20px;
          display: inline-block;
          margin-right: 5px;
          border-radius: 100%;
        }
      }

      thead {
        th {
          font-size: 20px;
          color: #393c45;
          font-weight: normal;
        }
      }

      tbody {
        tr {
          &.sizes {
            td {
              span {
                border: 1px solid gray;
                padding: 5px 5px 0;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }

    .thead-default th {
      background-color: #fff;
      font-weight: bold;
    }
  }
`;

const Compare = ({products}) => (
  <CompareContainer className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th />
            {products.map(product =>
              <th key={product.id}>
                {product.title}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Price</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.price}</td>
            )}
          </tr>
          <tr className="sizes">
            <th scope="row">Sizes</th>
            {products.map(product =>
              <td key={product.id}>
                {product.availableSizes.map((size, index) =>
                  <span key={index} className="text-center">{size}</span>
                )}
              </td>
            )}
          </tr>
          <tr className="description">
            <th scope="row">Description</th>
            {products.map(product =>
              <td key={product.id}>
                <span className="text-center">{product.description}</span>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </CompareContainer>
);

export default Compare
