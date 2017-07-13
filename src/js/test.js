/**
 * Created by p00422 on 2017/7/11.
 */
import React from 'react';

export default class Text extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'kylvia',age:18};
        this.chageAge = this.chageAge.bind(this);
    }
    chageAge(){
        this.setState (state => {
            state.age = 20;
        })
    }

    render(){
        return(
            <p onClick={this.chageAge}>hi {this.props.ite} ,my name is {this.state.name},age: {this.state.age}</p>
        )
    }
}
