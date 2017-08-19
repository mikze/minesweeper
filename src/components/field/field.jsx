import React, { Component } from 'react';
import fieldImg from '../../sprites/field.jpg';
import flagImg from '../../sprites/flag.jpg';

class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {img: fieldImg }

    }
    
  render() {
      
    return (
      <div>
        <img src={this.state.img} onClick={() => this.setState({img:flagImg})}/>
      </div>
    );
  }
}

export default Field;
//this.setState({img:ofaceImg}) 