import React, { Component } from 'react';

class PaginationList extends Component {
  render(){
    const numberOfPages =  [];
    for(let i = 1; i <= Math.ceil(this.props.totalProducts  / this.props.productsPerPage); i++){
      numberOfPages.push(i);
    }
    return(
      <div  className="Pagination">
        <ul>
          {numberOfPages.map( number =>  {
            return(
              <li key={number}>
                <button onClick={()=> this.props.paginate(number)}>
                  {number}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PaginationList;
