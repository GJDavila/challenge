import React, { Component } from 'react';
import {axiosGitHubGraphQL} from '../../config/connection'

const TITLE = 'React GraphQL GitHub Client';

 


 

const Get_User=` {
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
 }`

const User = ({ user,errors }) => {
  if(errors) {
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map(error => error.message).join(' ')}
      </p>
    );
  }
  return(
  <div>
    <p>
      <strong>Issues from user:</strong>
      <a href={user.url}>{user.name}</a>
    </p>
  </div>);
};

class Users extends Component {
  state = {
    nameSearch: '',
    user: null,
    errors: null,
  };
  componentDidMount() {
    this.onFetchFromGitHub();
  }


  onFetchFromGitHub = () => {
    axiosGitHubGraphQL
      .post('', { query: Get_User })
      .then(result =>
        this.setState(() => ({
          user: result.data.data.user,
          errors: result.data.errors,
        })),
      );
  };

  
  onChange = event => {
    this.setState({ nameSearch: event.target.value });
  };

  onSubmit = event => {
    // fetch data

    event.preventDefault();
  };

  

  render() {
    const { nameSearch, user, errors } = this.state; 

     
    return (
      <div>
        <h1>{TITLE}</h1>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">
            Show open issues for https://github.com/
          </label>
          <input
            id="url"
            type="text"
            value={nameSearch}
            onChange={this.onChange}
            style={{ width: '300px' }}
          />
          <button type="submit">Search</button>
        </form>

        <hr />

        {/* Here comes the result! */}
        {user ? (
          <User user={user} errors={errors} />
        ) : (
          <p>No information yet ...</p>
        )}
      </div>
    );
  }
}

export default Users;