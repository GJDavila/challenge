import React, { Component } from 'react';
const image = " ";


class Info extends Component {
    render() {
        return (
            <div className="mt-2 ml-2" id="info">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top" alt="avatar" />
                    <div className="card-header">
                       Usuario: {this.props.searchUser}
                </div>

                    <div className="card-body">
                        <p className="card-text">
                            Some quick example text to build on the card title
                             and make up the bulk of the card's content.
                        </p>
                        <a href="#info" className="card-link">Card link</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Info;
 
