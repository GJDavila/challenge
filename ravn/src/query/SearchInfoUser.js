import { gql } from "apollo-boost";


/*    query to get info of a user */
export const GET_CURRENT_USER = gql` query user($name: String!){
    
    user(login: $name) {
        id,
        login,
        url,
        avatarUrl,
        email,
        name,
       
    }
  }
  `;
  
  /*    query to get all repositories of a user */
  export const GET_REPOSITORIES_USER = gql` 
  query user($name: String!){
    user(login: $name) {
      
       repositories(  first:5  ) {
     
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
  