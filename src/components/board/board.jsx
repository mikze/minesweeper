import Field from '../field'
import React, { Component } from 'react';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state={
            board: []
        }
        this.fillBoard.bind(this);
        this.setBombs.bind(this);
        this.createBoard.bind(this);
    }
  
    setBombs(difficulty,num)
    {
        const emptyFields = new Array(num*num);
        for(let i=0; i<num*num; i++)
            {
                // console.log('FIELD ',i);
                let bomb = Math.random() < difficulty ? true : false;
                emptyFields[i] = {isBomb: bomb};
                if(bomb)
                    {
                        if(i===0)
                            {
                                console.log('rog 1: ',i);
                                emptyFields[i].points=999;
                            }
                        if(i===num-1)
                            {
                                console.log('rog 2: ',i);
                                emptyFields[i].points=999;
                            }
                        if(i===num*num-1-num )
                            {
                                console.log('rog 3: ',i);
                                emptyFields[i].points=999;
                            }    
                        if(i===num*num-1)
                            {
                                console.log('rog 4: ',i);
                                emptyFields[i].points=999;
                            }
                            // if()
                            //     {
    
                            //     }
                            //     if()
                            //         {
    
                            //         }
                            //    for(let u=i; u<i+4;u++)
                            //     {
                            //         emptyFields[i].points = 0;
                            //     }
                        
                    }
    
            }
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
        const emptyFields = this.setBombs(difficulty,num);
        
        setTimeout(this.createBoard(emptyFields,num),10000);
        
        return(
            <div>
                {this.state.board} {num}x{num} board
            </div>
        )
    }

componentWillMount = () => {
    this.fillBoard(10,0.5);
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
