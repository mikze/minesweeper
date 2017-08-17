import Field from '../field'
import React, { Component } from 'react';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state={
            num: 8,
            difficulty: 1,
            board: [],
            emptyFields: [],

        }

    }
  
    setBombs(difficulty,num)
    {
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
                               
                                column<num-1 ? emptyFields[i+1].points++ : console.log('no space');
                                column > 0 ? emptyFields[i-1].points++ : console.log('no space');
                                line > 0 ? emptyFields[i-num].points++ : console.log('no space');
                                line < num-1 ? emptyFields[i+num].points++ : console.log('no space');
                                line > 0 && column<num-1 ? emptyFields[i-num+1].points++ : console.log('no space');
                                line > 0 && column > 0 ? emptyFields[i-num-1].points++ : console.log('no space');
                                line < num-1 && column<num-1 ? emptyFields[i+num+1].points++ : console.log('no space');
                                line < num-1 && column > 0 ? emptyFields[i+num-1].points++ : console.log('no space'); 
                    }
                    console.log('column' ,column);
                    console.log('wiersz' ,line);
                    column === num-1 ? line++ : console.log();
                    column === num-1 ? column = 0 : column++;
                    
            }
            console.log(emptyFields);
            this.setState({emptyFields: emptyFields});
            return emptyFields;
    }

    createBoard(emptyFields,num)
    {
        let fields= [];
        const board = [];
        for(let i=0; i<num*num; i++)
            {
            fields.push(<td><Field isBomb={emptyFields[i].isBomb} points={emptyFields[i].points} /></td>);
            }
    
            for(let y=0;y<num*num;y+=num)
            board.push(<tr>{fields.slice(y,y+num)}</tr>)

            this.setState({board: board});
    }

    fillBoard(num,difficulty){
        const emptyFields = this.setBombs(this.state.difficulty,this.state.num);
        console.log(this.state.emptyFields);
        this.createBoard(emptyFields,this.state.num);

    }

componentWillMount = () => {
    this.fillBoard();
}

  render() {
    
    return (
      <div>
      {this.state.board}
      </div>
    );
  }
}

export default Board;
