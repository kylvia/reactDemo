/**
 * Created by p00422 on 2017/7/12.
 */
import React from 'react';

export default class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {temperature:''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({temperature : e.target.value})
    }
    render(){
        const scaleNames = {
            c:'Celsius',
            f:'Fahrenheit'
        };
        return (
            <fieldset>
                <legend htmlFor="">Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input type="text" value = {this.props.temperature}/>
            </fieldset>
        )
    }
}