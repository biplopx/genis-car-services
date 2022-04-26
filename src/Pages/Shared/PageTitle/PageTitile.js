import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitile = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Genius car services</title>
    </Helmet>
  );
};

export default PageTitile;