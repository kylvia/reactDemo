/**
 * Created by p00422 on 2017/7/12.
 */
import React from 'react';

export default class ListKeys extends React.Component{
    constructor(props){
        super(props);

    }
    mapList(props){
        const numbers = props.numbers;
        const listItems = numbers.map((number) => (<li key={number.id}>{number.name}</li>));
        return listItems;
    }
    render(){
        return <ul>{this.mapList(this.props)}</ul>;
    }
}