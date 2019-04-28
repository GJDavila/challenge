/*   created by Grimaldo Dávila Guillén 

   Component to show user info

*/


import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        console.log(this.props.infocard.node.name);
        return (
            <div className="card" style={{ width: '50rem' }} >
                <div className="card-body row">
                    <div className="col-3">
                        <img src={this.props.infocard.node.avatarUrl} className="img-fluid" />
                        <p className="card-text" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                            {this.props.infocard.node.login}
                        </p>
                    </div>
                    <div className="col">
                        <div className="card-header">
                            <p className="text-primary" style={{ fontSize: '20px' }}>
                                {this.props.infocard.node.name}
                            </p>
                        </div>

                        <p className="card-text">
                            {this.props.infocard.node.bio}
                        </p>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-success" target='_blank' href={this.props.infocard.node.url}>
                                    Ver Perfil en Github
                                </button>
                            </div>



                            <div className="col">

                                <button className="btn btn-primary" href="#"
                                    onClick={this.props.getRepos.bind(this, this.props.infocard.node.login)}>
                                    Ver Repositorios
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default UserCard;