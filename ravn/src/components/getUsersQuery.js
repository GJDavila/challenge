import React, { Component } from "react";
import { Query } from "react-apollo";
import ListCard from "./list/listCard";
import UserInfo from "./User/userInfo";


class GetUsersQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '',
            prev: '',
            hasNextPage:'',
            hasPreviousPage:'',
            page:1,
            total:0
            
        }
        this.pagination = this.pagination.bind(this);
         
    }

    
    pagination(move, cursor) {
       
        move == 'next' ? this.setState({ next: cursor, prev: '',page:this.state.page+1 })
                       : this.setState({ next: '', prev: cursor ,page:this.state.page-1});
    }

    render() {
        let numPerPage = 10;
        let variablesData = this.state.next != '' ? { login: this.props.login, queryString: this.props.user, typeData: 'USER', totalPerPage: numPerPage, next: this.state.next }
            : this.state.prev != '' ? { login: this.props.login, queryString: this.props.user, typeData: 'USER', totalPerPagePrev: numPerPage, prev: this.state.prev }
                                    : { login: this.props.login, queryString: this.props.user, typeData: 'USER', totalPerPage: numPerPage }
        return (
            //  $queryString: String!, $typeData:SearchType!,$totalPerPage:Int!,$prev:String,$next:String
            <Query query={this.props.query}
                variables={variablesData} >

                {result => {
                    if (result.loading) return <p>loading...</p>;
                    if (result.error) return <p>{result.error.message}</p>;
                    console.log(result.data);
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
                                        cursorPrev={this.props.type == 'user' ? result.data.search.pageInfo.startCursor
                                                                          : result.data.user.repositories.pageInfo.startCursor}
                                        hasNextPage={this.props.type == 'user' ? result.data.search.pageInfo.hasNextPage
                                                                          : result.data.user.repositories.pageInfo.hasNextPage}
                                        hasPreviousPage={this.props.type == 'user' ? result.data.search.pageInfo.hasPreviousPage
                                                                          : result.data.user.repositories.pageInfo.hasPreviousPage}
                                        page={this.state.page}
                                        total={this.props.type == 'user' ? result.data.search.userCount
                                                                        : result.data.user.repositories.totalCount}
                                        clearData={this.clearData}
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