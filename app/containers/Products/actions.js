import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE, COMPARE_PRODUCT, FILTER_PRODUCTS_BY_CATEGORY } from './constants';

export const fetchProductsRequest = function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = function reportFetchSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  };
};

export const fetchProductsError = function reportFetchError (error, status) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error,
    status,
  };
};

export const filterProducts = function filterProducts (products, size) {
  return {
    type: FILTER_PRODUCTS_BY_SIZE,
    size,
    items: size === '' ? products : products.filter(a => a.availableSizes.indexOf(size.toUpperCase()) >= 0),
  };
};

export const filterProductsByCategory = function filterProductsByCategory (products, category) {
  console.log(products);
  return {
    type: FILTER_PRODUCTS_BY_CATEGORY,
    category,
    items: category === '' ? products : products.filter(a => a.category === category.toUpperCase()),
  };
};


export const sortProducts = function sortProducts (items, sort) {
  const products = items.slice();
  if (sort !== '') {
    products.sort((a, b) =>
      (sort === 'lowest'
        ? ((a.price > b.price) ? 1 : -1)
        : ((a.price < b.price) ? 1 : -1)));
  } else{
    products.sort((a, b)=> (a.id > b.id) ? 1 : -1);
  }

  return {
    type: ORDER_PRODUCTS_BY_PRICE,
    sort,
    items: products,
  };
};

export const compareProducts = function compareProducts(products, item) {
  let productAlreadyInCompare = false;
  const compareItems = products.slice();
  compareItems.forEach(product => {
    if (product.id === item.id) {
      productAlreadyInCompare = true;
      item.compare = !item.compare;
    }
  });
  if (!productAlreadyInCompare) {
    compareItems.push({ ...item });
  }
  return {
    type: COMPARE_PRODUCT,
    items: compareItems,
  };
};
