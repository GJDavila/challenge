import React, { Component } from "react";
import "./App.css";
import { Query } from "react-apollo";
 
//import UserCard from './components/User/UserCard'
import listRepositoryCard from './components/repositories/listRepositoryCard'
import {GET_REPOSITORIES_USER} from './query/SearchInfoUser'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={GET_REPOSITORIES_USER}
              variables={{name:'gjdavila',numepage:5}} >

          {result => {
            if (result.loading) return <p>loading...</p>;
            if (result.error) return <p>{result.error.message}</p>;
            console.log(result.data.user.repositories);
            return (
             
                <listRepositoryCard repositories={result.data.user.repositories}/>
              
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;