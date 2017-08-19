import Field from '../field'
import React, { Component } from 'react';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state={
            num: 10,
            difficulty: 0.1,
            board: [],
            emptyFields: [],
        }
    }
  
    setBombs()
    {
        const difficulty = this.state.difficulty;
        const num = this.state.num;
        const emptyFields = [];
        let column = 0;
        let line = 0;

        for(let i=0; i<num*num; i++)
        emptyFields[i] = {isBomb: false, points: 0};

        for(let i=0; i<num*num; i++)
            {
                let bomb = Math.random() < difficulty ? true : false;
                emptyFields[i].isBomb=bomb;
                if(bomb)
                    {                              
                                if(column<num-1) emptyFields[i+1].points++;
                                if(column > 0) emptyFields[i-1].points++;
                                if(line > 0) emptyFields[i-num].points++;
                                if(line < num-1) emptyFields[i+num].points++;
                                if(line > 0 && column<num-1) emptyFields[i-num+1].points++;
                                if(line > 0 && column > 0) emptyFields[i-num-1].points++;
                                if(line < num-1 && column<num-1) emptyFields[i+num+1].points++;
                                if(line < num-1 && column > 0) emptyFields[i+num-1].points++; 
                    }
                    if(column === num-1) line++;
                    column === num-1 ? column = 0 : column++;         
            }
            this.setState({emptyFields: emptyFields}, () => {
                this.createBoard();
              });
    }

    createBoard()
    {
        const emptyFields = this.state.emptyFields;
        const num = this.state.num;
        const fields= [];
        const board = [];

        for(let i=0; i<num*num; i++)
            {
            fields.push(<td onClick={() => console.log(emptyFields[i].isBomb,'xD',emptyFields[i].points)}><Field /></td>);
            }
        for(let y=0;y<num*num;y+=num) {board.push(<tr>{fields.slice(y,y+num)}</tr>)}
        this.setState({board: board});
    }

componentWillMount = () => this.setBombs();

  render() {
    
    return (
      <div>
      {this.state.board}
      </div>
    );
  }
}

export default Board;