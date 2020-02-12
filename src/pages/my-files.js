import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  const { edges } = data.allFile;
  return (
    <Layout>
      <div>
        <h1>My site files</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>accessTime</th>
              <th>base</th>
              <th>root</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {edges.map(({ node }, index) => {
              const { id, accessTime, base, root, birthTime } = node;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{accessTime}</td>
                  <td>{base}</td>
                  <td>{root}</td>
                  <td>{birthTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          accessTime
          base
          root
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
