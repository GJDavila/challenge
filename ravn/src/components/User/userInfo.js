import React, { Component } from 'react';
const image = " ";


class UserInfo extends Component {
    render() {
 
        
        return (
            <div className="mt-2 ml-2" id="info">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.props.avatarUrl} className="card-img-top" alt="avatar" />
                    <div className="card-header">
                       {this.props.name}
                        <p className="card-text">
                          {this.props.login}
                        </p>
                   </div>

                    <div className="card-body">
                        <p className="card-text">
                            {this.props.email}
                       </p>

                        <p className="card-text">
                            {this.props.bio}
                        </p>

                        <p className="card-text">
                          {this.props.location}
                         </p>
                        <a href={this.props.url} className="card-link">Ver en Github</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserInfo;

