/*   created by Grimaldo Dávila Guillén 

   Component to show repository info

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
            <a target='_blank' href=  {this.props.infocard.node.url} className="card-link">Ver en Github</a>
          </div>
        </div>
      </div>
    )
  }
}

export default RepositoryCard;