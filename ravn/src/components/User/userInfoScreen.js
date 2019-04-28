import React, { Component } from 'react';
import UserInfo from './userInfo';
import ListCard from '../list/listCard';
import RepositoryCard from '../repositories/repositoryCard'
const repositories = [ 
    {name: "repo 1", info: "this is repo 1"},
    {name: "repo 2", info: "this is repo 2"},
    {name: "repo 3", info: "this is repo 3"},
    {name: "repo 4", info: "this is repo 4"},
  ]

class UserInfoScreen extends Component {
    render() {
        return (
            <div className=" row" style={{ marginTop: "45px", width: "100%" }}>
                <div className="col-3 ml-auto">
                    <UserInfo/>
                </div>
                <div className="col-6 mr-auto">
                    <ListCard data={repositories} componentTemplate={<RepositoryCard/> }/>
                </div>
            </div>
        )
    }
}
export default UserInfoScreen;