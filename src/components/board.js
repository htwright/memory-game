import React from 'react';
import Card from './card';

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grid: []
        };
    }
    generateNumber(){
        return Math.floor(Math.random()*10);
    }
    generateGrid() {

        return this.props.elements.map((element, index) =>
            <Card element={element} />
        );
    }

    render(){

        console.log(this.props);
        let y = this.props.elements.map((element, index) =>
            <Card element={element} />);
            
        return (
            this.props.elements.map(function(el){
                return <Card item={el} />;
            })
        );
    }

}
        // this.generateNumber();
        // let elements = this.props.elements.map((element, index) =>
        //     element.map((item, index1) => 
        //     <Card row={index} column={index1} number={this.generateNumber} classes={x} 
        //         onClick = {(e => {this.setState({hidden: true})})}/>
        // ));
//  grid = [[x, x, x, x],
//   [x, x, x, x],
//   [x, x, y, x],
//   [x, x, x, x]]
// grid[2][2]
