import Field from '../field'
import React, { Component } from 'react';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state={
            num: 8,
            difficulty: 0.3,
            board: [],
            emptyFields: [],

        }

    }
  
    setBombs(difficulty,num)
    {
        const emptyFields = [];
        let count = 0;
        for(let i=0; i<num*num; i++)
        emptyFields[i] = {isBomb: false, points: 0};

        for(let i=0; i<num*num; i++)
            {
                let bomb = Math.random() < difficulty ? true : false;
                emptyFields[i].isBomb=bomb;
                if(bomb)
                    {
                        if(i===0)
                            {   
                                emptyFields[i+1].points++;
                                emptyFields[i+num+1].points++;
                                emptyFields[i+num].points++;   
                             }
                        else if(i===num-1)
                            {
                                emptyFields[i-1].points++;
                                emptyFields[i+num].points++;
                                emptyFields[i+num-1].points++;    
                            }
                        else if(i===num*num-num )
                            {
                                emptyFields[i+1].points++;
                                emptyFields[i-num+1].points++;
                                emptyFields[i-num].points++;  

                            }    
                        else if(i===num*num-1)
                            {
                                emptyFields[i-1].points++;
                                emptyFields[i-num].points++;
                                emptyFields[i-num-1].points++;
                            }
                        else if(i>0 && i<num-1)
                            {
                                emptyFields[i-1].points++;
                                emptyFields[i+1].points++;
                                emptyFields[i+num].points++;
                                emptyFields[i+num-1].points++;
                                emptyFields[i+num+1].points++;
                            }
                        else if(i>num*num-num && i<num*num-1)
                            {
                                emptyFields[i-1].points++;
                                emptyFields[i+1].points++;
                                emptyFields[i-num].points++;
                                emptyFields[i-num-1].points++;
                                emptyFields[i-num+1].points++;
                                
                            }
                        else if(count === num -1) /////////////
                            {
                                emptyFields[i-1].points++;
                                emptyFields[i+num].points++;
                                emptyFields[i-num].points++;
                                emptyFields[i+num-1].points++;
                                emptyFields[i-num-1].points++;
                                
                            }
                        else if(count === 0) //////////////
                            {
                                emptyFields[i+1].points++;
                                emptyFields[i+num].points++;
                                emptyFields[i-num].points++;
                                emptyFields[i+num+1].points++;
                                emptyFields[i-num+1].points++;  
                            }
                        else
                            {
                                emptyFields[i+1].points++;
                                emptyFields[i-1].points++;
                                emptyFields[i-num].points++;
                                emptyFields[i+num].points++;
                                emptyFields[i-num+1].points++;
                                emptyFields[i-num-1].points++;
                                emptyFields[i+num+1].points++;
                                emptyFields[i+num-1].points++;
                                
                            }
                        
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
