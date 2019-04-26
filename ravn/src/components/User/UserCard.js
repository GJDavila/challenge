/*created by Grimaldo Dávila Guillén
  25/04/2019
*/
 
import React, { Component } from 'react';

 

class UserCard extends Component {

  render(){
 
  return (
    
    <div className="card" style={{width: '50rem'}}>
    <div className="card-body row">
      <div className="col-4">
        <img src={"https://avatars2.githubusercontent.com/u/22488492?v=4"} className="img-fluid" style={{ width: '280px' }} />
      </div>
      <div className="col">
        <div class="card-header">Header</div>

        <p className="card-text">
         { this.props.data.name} ss
        </p>
        <a href="#" className="card-link">Card link</a>
      </div>
    </div>
  </div>
  );
  
  }

}

export default UserCard;
