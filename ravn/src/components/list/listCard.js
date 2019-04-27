import React, { Component } from 'react';



class ListCard extends Component {
    render() {

        let table= this.props.data.map((value,i)=>{
                return(
                    <div>
                    
                        {React.cloneElement(this.props.componentTemplate, {infocard:value})}
                    </div>)
        })



        return (
           <div>
             {table}
           </div>
        )
    }
}

export default ListCard;

