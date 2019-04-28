/*   created by Grimaldo Dávila Guillén 

   Component to show user info

*/


import React, { Component } from 'react';

class UserCard extends Component{
    render() {
        console.log(this.props.infocard.node.name);
        return (
            <div className="card" style={{ width: '50rem' }} >
                <div className="card-body row">
                    <div className="col-3">
                        <img src={this.props.infocard.node.avatarUrl} className="img-fluid" />
                        <p className="card-text">
                        {this.props.infocard.node.login}
                        </p>
                    </div>
                    <div className="col">
                        <div className="card-header">{this.props.infocard.node.name} </div>

                        <p className="card-text">
                        {this.props.infocard.node.bio}
                        </p>
                        <a target='_blank' href={this.props.infocard.node.url} 
                            className="card-link">
                            Ver Perfil en Github
                        </a><br/>
                        <a  href="#" 
                            className="card-link"
                            onClick={this.props.getRepos.bind(this, this.props.infocard.node.login)}>
                            Ver Repositorios
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserCard;