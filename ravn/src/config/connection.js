import axios from 'axios';
import { HttpLink } from 'apollo-link-http';
const GITHUB_BASE_URL = 'https://api.github.com/graphql';

export const axiosGitHubGraphQL = axios.create({
  baseURL: GITHUB_BASE_URL,
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

export const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});