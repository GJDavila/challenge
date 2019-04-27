
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';

import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
 
import { InMemoryCache } from 'apollo-cache-inmemory';
import {httpLink} from '../src/config/connection'


const cache = new InMemoryCache();
const client = new ApolloClient({
    link: httpLink,
    cache,
  });

ReactDOM.render(
    <ApolloProvider client={client}>

    <App />
    </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
