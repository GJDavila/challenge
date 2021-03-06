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
  query user($login: String!,$totalPerPage:Int,$totalPerPagePrev:Int,$prev:String,$next:String){
    user(login: $login) {
      id,
      login,
      url,
      avatarUrl,
      email,
      name,
       repositories( first:$totalPerPage,last:$totalPerPagePrev,before:$prev ,after:$next,  orderBy:{field:UPDATED_AT,direction:DESC}) {
     
         totalCount
         edges {
           node {
             name,
             updatedAt,
             description,
             url,
             languages(first:1){
              nodes{
                name
              }
            }
             
           }cursor
         }
         pageInfo {
           endCursor
           startCursor
           hasNextPage
           hasPreviousPage
         }
       
      } 
    }
  }
  `;
  

/**************************************************************
  query to get data from user or repository
  input:
    nameUser : user name to search
    typeData : USER/REPOSITORY   
    totalPerPage: total number of elements per page
    cursor: current position 
**************************************************************/
export const GET_LIST_DATA =gql`

query getListData($queryString: String!, $typeData:SearchType!,$totalPerPage:Int,$totalPerPagePrev:Int,$prev:String,$next:String) {
  search(query: $queryString, type: $typeData, first:$totalPerPage,last:$totalPerPagePrev,before:$prev ,after:$next) {
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
    }  pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
`;