import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Header headerText="Reach us at the email address below!!" />
      <p>
        <a href="mailto:us@example.com">US</a>
      </p>
    </Layout>
  );
};

export default Contact;
