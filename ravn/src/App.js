import React, { Component } from "react";
import "./App.css";
import { Query } from "react-apollo";

//import UserCard from './components/User/UserCard'
import { GET_LIST_DATA,GET_REPOSITORIES_USER } from './query/SearchInfoUser'
import UserInfo from "./components/User/userInfo";
import RepositoryCard from "./components/repositories/repositoryCard";
import UserCard from "./components/User/UserCard";
import UserInfoScreen from "./components/User/userInfoScreen";
 import GetUsersQuery from "./components/getUsersQuery";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchUser: '',
      results: '',
      body:'',
      login:'gjdavila',
      type:''
    };

    this.getUsers = this.getUsers.bind(this);
    this.getRepos = this.getRepos.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  getUsers() {
    var temp = this.state.searchUser;

    this.setState({
      results: temp,
      type:'user'
    })

  }

  getRepos() {
    
    this.setState({
      type:'repository'
    })

  }
  render() {
    const temporal = "";

    return (
      <div className="App">
        <nav className="navbar fixed-top" style={{ backgroundColor: "#24292e" }}>
          <div className="form-inline">
            <input className="form-control mr-sm-2 form-control-sm"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
              name="searchUser"
              onChange={this.handleInputChange.bind(this)} />
            <button className="btn btn-outline-light btn-sm my-2 my-sm-0"
              type="button"
              onClick={this.getUsers.bind(this)}>
              Buscar
            </button>
          </div>
        </nav>

        <div className="body mx-auto col-6">
        {
          this.state.type==='user' && 
          <GetUsersQuery user={this.state.results} type={this.state.type} getRepos={this.getRepos} UserCard={<UserCard/>} query={GET_LIST_DATA} />
        }
        {
          this.state.type==='repository' && 
          <GetUsersQuery login={this.state.login}  type={this.state.type}  getRepos={this.getRepos} UserCard={<RepositoryCard/>} query={GET_REPOSITORIES_USER} />

           
        }
        
        </div>




      </div>

    );
  }
}


export default App;