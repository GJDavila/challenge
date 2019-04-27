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

class repositoryCard extends Component {
  render() {

   
    return (
      <div style={{ backgroundColor: "#e1e4e8" }} id="repos">
         <div className="card" style={{ width: '50rem' }} >
          <div className="card-body row">
            <div className="col-4">
            {this.props.node.name}
            </div>
            <div className="col">
              <div className="card-header">{this.props.node.name}</div>
              <p className="card-text">
              {this.props.node.description}
              </p>
              <a href="#repos" className="card-link">{this.props.node.url}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default repositoryCard;