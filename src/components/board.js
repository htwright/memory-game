import React from 'react';
import Card from './card';

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            hidden: false
        };
    }

    generateNumber(){
        const number = Math.floor(Math.random()*10);
        // return number;
        this.setState({number});
    }
    toggleHidden(){
        // className={['card-back', 'card'].join(' ')}
        let classes = ['card'];
        if (this.state.hidden){
            classes.push('card-back');
        }
        return classes.join(' ');
    }

    render(){
        let x = this.toggleHidden();
        this.generateNumber();
        let elements = this.props.elements.map((element, index) => 
            <Card key={index} number={this.state.number} classes={x} 
                onClick = {(e => {this.setState({hidden: true})})}/>
        );
        return (
            // <Card number={this.state.number} classes={x}
            //     onClick = {(e => {this.setState({hidden: true})})}/>
            <div>{elements}</div>
        );
    }

}
