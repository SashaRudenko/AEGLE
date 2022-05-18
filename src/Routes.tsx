import React from 'react';
import styled from 'styled-components';
import { Routes as Switch, Route } from 'react-router-dom';
import Footer from './common/layouts/Footer';
import Header from './common/layouts/Header';
import HomePage from './modules/home/HomePage';

const Routes: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<PageNotFound>Coming soon...</PageNotFound>} />
      </Switch>
      <Footer />
    </>
  );
};

const PageNotFound = styled.div`
background: #0E4656;
height: 50px;
font-size: 24px;
color: #ffffff;
font-weight: 600px;
text-align: center;
`;

export default Routes;
