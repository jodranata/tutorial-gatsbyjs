import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

export default () => (
  <div style={{ color: 'green' }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Gatsby tut" />
    <p>what a world</p>
    <img src="https://source.unsplash.com/random/400x200" alt="random" />
  </div>
);
