import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_LIST_DATA } from '../query/SearchInfoUser';
 import ListCard from "./list/listCard";
import UserCard from "./User/UserCard";

class GetUsersQuery extends Component {
    render() {
        return (
          //  $queryString: String!, $typeData:SearchType!,$totalPerPage:Int!,$prev:String,$next:String
            <Query query={this.props.query}
                variables={{ login:this.props.login, queryString: this.props.user ,typeData:'USER' ,totalPerPage:5}} >

                {result => {
                   // console.log(result.data.search);
                    if (result.loading) return <p>loading...</p>;
                    if (result.error) return <p>{result.error.message}</p>;
                    //console.log(result.data.user.repositories);
                    return (
                        <ListCard 
                            data={this.props.type=='user'?result.data.search:result.data.user.repositories}
                            componentTemplate={this.props.UserCard}
                            getRepos={this.props.getRepos}
                            type={this.props.type}
                        />
                         
                    );
                }}
            </Query>
        )
    }
}

export default GetUsersQuery;