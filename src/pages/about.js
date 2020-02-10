import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Header headerText="Great Gatsby" />
    <Header headerText="F Scott Fitzgerald" />
    <p style={{ color: 'teal' }}>
      Francis Scott Key Fitzgerald (September 24, 1896 – December 21, 1940) was
      an American fiction writer, whose works helped to illustrate the
      flamboyance and excess of the Jazz Age.
    </p>
  </Layout>
);
