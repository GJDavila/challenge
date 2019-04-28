/*
    created by Grimaldo Dávila Guillén 
    variables of connection 
*/

import { HttpLink } from 'apollo-link-http';
const GITHUB_BASE_URL = 'https://api.github.com/graphql';

export const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});