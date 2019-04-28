import React, { Component } from "react";
import { Query } from "react-apollo";
import ListCard from "./list/listCard";
import UserInfo from "./User/userInfo";

class GetUsersQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next:'',
            prev:''
        }
       this.pagination=this.pagination.bind(this);
    }

    pagination(move,cursor){
        move=='next'?this.setState({next:cursor,prev:''})
                    :this.setState({next:'',prev:cursor});
    }

    render() {
        let variablesData = this.state.next !='' ?{login: this.props.login,queryString: this.props.user,typeData: 'USER',totalPerPage: 5,next: this.state.next}
                                                 :this.state.prev !='' ?{login: this.props.login,queryString: this.props.user,typeData: 'USER',totalPerPage: 5,prev: this.state.prev}
                                                                       :{login: this.props.login,queryString: this.props.user,typeData: 'USER',totalPerPage: 5}
        return (
            //  $queryString: String!, $typeData:SearchType!,$totalPerPage:Int!,$prev:String,$next:String
            <Query query={this.props.query}
                variables={variablesData} >

                {result => {
                    if (result.loading) return <p>loading...</p>;
                    if (result.error) return <p>{result.error.message}</p>;
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
                                        func_pagination={this.pagination}
                                        cursor={this.props.type == 'user' ? result.data.search.pageInfo.endCursor
                                                                          : result.data.user.repositories.pageInfo.endCursor}
                                         
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