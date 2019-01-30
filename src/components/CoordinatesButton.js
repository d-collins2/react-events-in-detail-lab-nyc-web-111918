// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component {
  // constructor(props){
  //   super(props)
  //   // onReceiveCoordinates: props
  // }

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
    console.log(e)
  }

  render(){
    return (
      <button onClick={this.handleClick}>Coordinate</button>
    )
  }
}

export default CoordinatesButton;
