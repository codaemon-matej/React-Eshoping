import _get from 'lodash/get';
import { convertQueryStringToString } from './strings';

export const getCookie = (cookiename) => {
  // Get name followed by anything except a semicolon
  const cookiestring=RegExp(`${cookiename}[^;]+`).exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

export const deleteCookie = (cookiename) => {
  document.cookie = ` ${cookiename  }=; expires=Thu, 01 Jan 1970 00:00:01 GMT; max-age=0;`;
}

export const getFullAddressStringFromCookie = () => {
  const defaultAddress = { full_address: 'Looking for your address' };
  const addressCookie = getCookie('first_record_search') || defaultAddress;
  const parsedString = addressCookie === defaultAddress ? "" : parseAddressPartsFromCookie(addressCookie);
  return parsedString;
};

export const getFullAddressObjectFromCookie = () => {
  const defaultAddress = { full_address: 'Looking for your address' };
  const addressCookie = getCookie('first_record_search') || defaultAddress;
  const fullAddressObject = addressCookie === defaultAddress ? defaultAddress : parseAddressObjectFromCookie(addressCookie);
  return fullAddressObject
}

// We need the address parts in an object to prepare report create params during onboarding
export const parseAddressObjectFromCookie = (addressCookie) => {
  const string = convertQueryStringToString(addressCookie);
  return {
    street: _get(JSON.parse(string), 'full_address', null),
    city: _get(JSON.parse(string), 'city', null),
    state: _get(JSON.parse(string), 'state', null),
    zipcode: _get(JSON.parse(string), 'zip_code', null),
  };
};

// We need the address parts as a concatenated string during for the report loading component
export const parseAddressPartsFromCookie = (addressCookie) => {
  const string = convertQueryStringToString(addressCookie);
  const street = _get(JSON.parse(string), 'full_address', null);
  const city = _get(JSON.parse(string), 'city', null);
  const state = _get(JSON.parse(string), 'state', null);
  const zipcode = _get(JSON.parse(string), 'zip_code', null);

  return `${street.toLowerCase()} ${city.toLowerCase()} ${state.toUpperCase()} ${zipcode}`;
};
