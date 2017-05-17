import React from 'react';
import Card from './card';

export default class Board extends React.Component {



    getElement(){
        let element = this.props.elements;
        return element.map((el, index) => <Card key={index} item={el}/>);
    }

    render() {
        console.log('Board',this.props);

        return (
      <div>{this.getElement()}</div>
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
