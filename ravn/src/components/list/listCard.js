import React, { Component } from 'react';


/* Component to show a list of elements 
    input:
        data: array of elements
        componentTemplate:  
*/
class ListCard extends Component {
    render() {
        let comp=this.props.componentTemplate;
        console.log(this.props.data.edges);
        let table= this.props.data.edges.map((value,i)=>{
                return(
                    React.cloneElement(comp, {infocard:value, key:i, getRepos:this.props.getRepos})
                  )
        })
        return (
           <div >
             {table}
           </div>
        )
    }
}

export default ListCard;

