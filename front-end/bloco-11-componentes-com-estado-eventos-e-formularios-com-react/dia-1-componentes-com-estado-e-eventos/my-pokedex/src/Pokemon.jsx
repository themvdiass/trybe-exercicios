import React from "react";

class Pokas extends React.Component {
  render() {
    const { name, type, averageWeight:{ value, measurementUnit }, image } = this.props.Key; 
    return(
            <div className='pokemon'>
            <div className="info">
              <p>{ name }</p>
              <p>{ type }</p>
              <p>Average Weight: { `${ value } ${ measurementUnit }`}</p>
            </div>
            <img src={ image } alt="" />
          </div>
    )
  }
}

export default Pokas
