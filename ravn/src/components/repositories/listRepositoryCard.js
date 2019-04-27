
/*   created by Grimaldo Dávila Guillén 

    receive repositories object with:
      totalCount
         edges {
           node {
             name,
             updatedAt,
             description,
             url
             
           }cursor
         }
         pageInfo {
           endCursor
           hasNextPage
         }
*/


import React, { Component } from 'react';
import repositoryCard from './repositoryCard'

class listRepositoryCard extends Component {
  render() {

    let repositories = this.props.repositories.map((value, i) => {
        
        <repositoryCard node={value}/>
    })
    return (
      <div style={{ backgroundColor: "#e1e4e8" }} id="repos">
        {repositories}
      </div>
    )
  }
}

export default listRepositoryCard;