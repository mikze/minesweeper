import Field from '../field'
import React, { Component } from 'react';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state={
            num: 10,
            difficulty: 1,
            board: [],
            emptyFields: [],

        }

    }
  
    setBombs(difficulty,num)
    {
        const emptyFields = [];
        let count = 0;
        for(let i=0; i<num*num; i++)
            {
                let bomb = Math.random() < difficulty ? true : false;
                emptyFields[i] = {isBomb: bomb};
                if(bomb)
                    {
                        if(i===0)
                            {
                                emptyFields[i].points=999;
                             }
                        else if(i===num-1)
                            {
                                emptyFields[i].points=999;
                            }
                        else if(i===num*num-num )
                            {
                                emptyFields[i].points=999;
                            }    
                        else if(i===num*num-1)
                            {
                                emptyFields[i].points=999;
                            }
                        else if(i>0 && i<num-1)
                            {
                                emptyFields[i].points=888;
                            }
                        else if(i>num*num-num && i<num*num-1)
                            {
                                emptyFields[i].points=777;
                            }
                        else if(count === num -1) /////////////
                            {
                                emptyFields[i].points=666;
                            }
                        else if(count === 0) //////////////
                            {
                                emptyFields[i].points=555;
                            }
                        else
                            {
                                emptyFields[i].points=444;
                            }
                            
                            //     if()
                            //         {
    
                            //         }
                            //    for(let u=i; u<i+4;u++)
                            //     {
                            //         emptyFields[i].points = 0;
                            //     }
                        
                    }
                    console.log(count);
                    if(count === num-1)
                        {
                            count = 0;
                        }
                        else{
                            count++;
                        }
                    
                    
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
