import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import UserCard from '../components/User/UserCard'
import 'cross-fetch/polyfill';
//import ApolloClient from 'apollo-boost';

const GET_CURRENT_USER = gql`{
    user(login: "gjdavila") {
        id,
        login,
        url,
        avatarUrl,
        email,
        name,
       repositories(  first: 5 ,after:"Y3Vyc29yOnYyOpHOBCWLPQ==") {
     
         totalCount
         edges {
           node {
             name,
             updatedAt,
             description,
             url
             
           }cursor
         }
         pageInfo {
           endCursor
           hasNextPage
         }
       
      } 
    }
}
`;


 

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
   {({ data }) => {
      let { user } = data;
     console.log(data.user);

      return (
       <UserCard  data={data} />
      );
    }}
  </Query>
);

export default Profile;