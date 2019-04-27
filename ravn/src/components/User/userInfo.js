import React, { Component } from 'react';
const image = " ";


class UserInfo extends Component {
    render() {
        return (
            <div className="mt-2 ml-2" id="info">
                <div className="card" style={{ width: '18rem' }}>
                    <img src="" className="card-img-top" alt="avatar" />
                    <div className="card-header">
                        Usuario: name
                        <p className="card-text">
                           login
                        </p>
                   </div>

                    <div className="card-body">
                        <p className="card-text">
                            email
                       </p>

                        <p className="card-text">
                            bio
                        </p>

                        <p className="card-text">
                           location
                         </p>
                        <a href="#info" className="card-link">Card link</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserInfo;

