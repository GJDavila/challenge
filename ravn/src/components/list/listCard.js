import React, { Component } from 'react';


/* Component to show a list of elements 
    input:
        data: array of elements
        componentTemplate:  
*/
class ListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: ''
        }

    }
    componentDidMount() {
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

    render() {


        return (
            <div >
                <div >

                    {this.state.table}
                </div>
                <div >

                    <nav aria-label="Page navigation"
                        className="mt-2"
                        style={{ marginLeft: '50%' }}>
                        <ul className="pagination">
                            {this.props.hasPreviousPage === true &&
                                <li className="page-item" >
                                    <a className="page-link"
                                        onClick={this.props.func_pagination.bind(this, 'prev', this.props.cursorPrev)}
                                        href="#"
                                        aria-label="Previous">Previous</a>
                                </li>}
 
                            <li className="page-item" >
                                    <a className="page-link"
                                        href="#"
                                        aria-label="Previous">
                                        {this.props.page}
                                        </a>
                                </li>
                                <li className="page-item" >
                                    <a className="page-link"
                                        href="#"
                                        aria-label="Previous">
                                        de
                                        </a>
                                </li>
                                <li className="page-item" >
                                    <a className="page-link"
                                        href="#"
                                        aria-label="Previous">
                                        {Math.ceil(this.props.total / 10)}
                                        </a>
                                </li>

                            
                            {this.props.hasNextPage === true &&
                                <li className="page-item">
                                    <a className="page-link"
                                        onClick={this.props.func_pagination.bind(this, 'next', this.props.cursor)}
                                        href="#"
                                        aria-label="Next">Next</a>
                                </li>}
                        </ul>
                    </nav>
                </div>
            </div>

        )
    }
}

export default ListCard;

