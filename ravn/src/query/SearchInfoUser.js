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
  
  /*    query to get data from user or repository  */
  export const GET_REPOSITORIES_USER = gql` 
  query user($name: String!,$next: String!){
    user(login: $name) {
      
       repositories(  first:5 ,after:$next ) {
     
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
  

/*
  query to get data from user or repository
  input:
    nameUser : user name to search
    typeData : USER/REPOSITORY   
    totalPerPage: total number of elements per page
    cursor: current position 


*/
export const GET_LIST_DATA =gql`
query getListData($nameUser: String!, $typeData:SearchType!,$totalPerPage:Int!,$cursor:String!) {
  search(query: $nameUser, type: $typeData, first:$totalPerPage ,after:$cursor) {
    userCount
    edges {
      node {
        
        ... on User {
          
          avatarUrl
          url
          bio
          name
          email
          location
          login
          id
          
         
        }
         ... on Repository {
           
          createdAt
          url
          name
          description
          id
         
        }
      }cursor
    }
  }
}
`;