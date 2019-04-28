/*   created by Grimaldo Dávila Guillén 

   Component to show repository info

*/

import React, { Component } from 'react';

class RepositoryCard extends Component {
  render() {


    return (
      <div className="mt-2 ml-2" > 
        <div className="card text-left">
          <div className="card-header">
            <p className="text-primary" style={{ fontSize: '20px' }}> {this.props.infocard.node.name} </p>
          </div>

          <div className="card-body row">
            <div className="col-7">
              <p className="card-text">
                {this.props.infocard.node.description}

              </p>
              <div className="row ml-2">
                <span className="repo-language-color">
                </span>
                <p className="card-text ml-2">
                  {this.props.infocard.node.languages.nodes[0] !== undefined && this.props.infocard.node.languages.nodes[0].name}
                </p>
              </div>

            </div>
            <div className="col">
              <a className="btn btn-primary" target='_blank' href={this.props.infocard.node.url} >Ver en Github</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RepositoryCard;