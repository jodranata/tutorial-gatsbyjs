import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => (
  <Layout>
    <h1>About pandas {data.site.siteMetadata.title}</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi cum unde
      reiciendis quasi porro tenetur, vero obcaecati deleniti omnis, esse error
      explicabo magnam amet, fugit impedit ea corporis! Enim, amet.
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
