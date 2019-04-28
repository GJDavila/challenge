import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_LIST_DATA } from '../query/SearchInfoUser';
import ListCard from "./list/listCard";
import UserCard from "./User/UserCard";
import UserInfo from "./User/userInfo";

class GetUsersQuery extends Component {
    render() {
        return (
            //  $queryString: String!, $typeData:SearchType!,$totalPerPage:Int!,$prev:String,$next:String
            <Query query={this.props.query}
                variables={{ login: this.props.login, queryString: this.props.user, typeData: 'USER', totalPerPage: 5 }} >

                {result => {
                    // console.log(result.data.search);
                    if (result.loading) return <p>loading...</p>;
                    if (result.error) return <p>{result.error.message}</p>;
                    //console.log(result.data.user.repositories);
                    return (
                        <div>

                            <div className=" row" style={{ marginTop: "45px", width: "100%" }}>
                                {this.props.type === 'repository' &&
                                    <div className="col-3 ml-auto">
                                        <UserInfo login={result.data.user.login}
                                                  name={result.data.user.name} 
                                                  bio={result.data.user.bio}
                                                  url={result.data.user.url} 
                                                  location={result.data.user.location}
                                                  avatarUrl={result.data.user.avatarUrl}
                                                  email={result.data.user.url} />
                                    </div>
                                }
                                    <div className="col-6 mr-auto">
                                        <ListCard
                                            data={this.props.type == 'user' ? result.data.search : result.data.user.repositories}
                                            componentTemplate={this.props.UserCard}
                                            getRepos={this.props.getRepos}
                                            type={this.props.type}
                                        />
                                    </div>
                            </div>


                        </div>

                    );
                }}
            </Query>
        )
    }
}

export default GetUsersQuery;