import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import "./styles/application.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: "https://api.ss.dev/resource/api",
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);
