/*   created by Grimaldo Dávila Guillén 

    receive node object with:
     node {
             name,
             updatedAt,
             description,
             url
             
           }

*/

import React, { Component } from 'react';

class RepositoryCard extends Component {
  render() {


    return (
      <div className="mt-2 ml-2" >
        <div className="card">
          <div className="card-header">
            {this.props.infocard.node.name}
          </div>

          <div className="card-body">
            <p className="card-text">
            {this.props.infocard.node.description}
            </p>
            <a target='_blank' href=  {this.props.infocard.node.url} className="card-link">link en github</a>
          </div>
        </div>
      </div>
    )
  }
}

export default RepositoryCard;