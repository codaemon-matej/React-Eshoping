import { all } from 'redux-saga/effects'
import LoginSaga from './containers/Login/sagas';
import ClientSaga from './client/sagas';
import SignupSaga from './containers/Register/sagas';
import ProfileSaga from './containers/Profile/sagas';
import ProductsSaga from './components/Products/sagas';
import AllProductsSaga from './containers/Products/sagas';

export default function* IndexSaga() {
  yield all([
    LoginSaga(),
    ClientSaga(),
    SignupSaga(),
    ProfileSaga(),
    ProductsSaga(),
    AllProductsSaga(),
  ])
}
