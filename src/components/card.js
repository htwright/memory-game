import React from 'react';

export default class  Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[]
        };
    }




    generateRand(){
        return Math.floor(Math.random()*10);
    }

    generateGrid(){
        return this.props.item.map((it, index)=>{
            //if (this.state.items[index] === false)
            return (
                <div key={index} className="card" onClick=(e => 
                    <span className={index}>{this.generateRand()}</span>
                </div>
            );
        });
    }

    render(){
        console.log('Card',this.props);
        return (
            <ul>{this.generateGrid()}</ul>
        );
    }
}