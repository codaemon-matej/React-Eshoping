/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import Products from '../../components/Products';
import SiteBlocks from './siteBlocks';
import BigSale from '../../components/BigSale';
import FeatureProducts from '../../components/FeatureProducts';

const HomePageContainer = styled.div`
`;

const HomePage = () => (
  <HomePageContainer>
    <Carousel />
    <Products />
    <FeatureProducts />
    <SiteBlocks />
    <BigSale />
    <Footer />
  </HomePageContainer>
);

const mapStateToProps = state => ({
  loggedIn: state.login,
})

export default connect(mapStateToProps)(HomePage)
