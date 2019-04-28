import React, { Component } from 'react';


/* Component to show a list of elements 
    input:
        data: array of elements
        componentTemplate:  
*/
class ListCard extends Component {
    constructor(props){
        super(props);
        this.state={
            table:''
        }
        this.paginate=this.paginate.bind(this);
    }
    componentDidMount(){
        let comp = this.props.componentTemplate;
        let table = this.props.data.edges.map((value, i) => {
            return (
                React.cloneElement(comp, { infocard: value, key: i, getRepos: this.props.getRepos })
            )
        })
        this.setState({
            table
        })
    }
  
    paginate(){
        
    }
    render() {
       
      
        return (
            <div >
                {this.state.table}

                <nav aria-label="Page navigation example">
                    <ul class="col-6 pagination">
                        <li class="page-item">
                            <a class="page-link" onClick={this.props.func_pagination.bind(this,'prev',this.props.cursor)} href="#">Previous</a>
                        </li>

                        <li class="page-item">
                            <a class="page-link" onClick={this.props.func_pagination.bind(this,'next',this.props.cursor)} href="#">Next</a>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}

export default ListCard;

