import React, { Component } from 'react';
import fieldImg from '../../sprites/field.jpg';
import ofaceImg from '../../sprites/oface.jpg';

class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {img: fieldImg }

    }
    
  render() {
      
    return (
      <div>
        <img src={this.state.img} onClick={ () => {this.props.isBomb ? this.setState({img: ofaceImg}) : console.log('no bomb') } } />
      </div>
    );
  }
}

export default Field;
//this.setState({img:ofaceImg}) 