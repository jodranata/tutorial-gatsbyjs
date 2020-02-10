import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Gatsby tut" />
    <p>what a world</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random" />
    <br />
    <h3>A fake gatsby site</h3>
    <p>Let's build a fake Blog site using gatsby as the framework</p>
  </Layout>
);
