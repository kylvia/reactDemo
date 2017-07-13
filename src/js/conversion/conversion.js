/**
 * Created by p00422 on 2017/7/12.
 */
import React from 'react';
/*class ShowResult extends React.Component{
    render(

    )
}*/
function ShowResult(props){
    return <p>{props.result}</p>
}

function Celsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function Fahrenheit(celsius){
    return celsius*9/5+32;
}
export default class Conversion extends React.Component{
    constructor(props){
        super(props);
        this.state = {temperature:this.props.temperature,scale:this.props.scale};
        this.handleChange = this.handleChange.bind(this);
        this.toConvert = this.toConvert.bind(this);
        this.scaleNames = {
            c:'Celsius',
            f:'Fahrenheit'
        };
    }
    handleChange(e){
        this.setState({temperature : e.target.value},()=>{
            this.toConvert(this.state.temperature,eval(this.scaleNames[this.state.scale]))
        });
        //this.toConvert(this.state.temperature,this.state.scale)
    }
    toConvert(temperature,convers){
        const input = parseFloat(temperature);
        if(Number.isNaN(input)) return '';
        const output = convers(input);
        const rounded = Math.round(output*1000)/1000;
        this.setState({result : rounded.toString()});
    }
    render(){
        return (
            <fieldset>
                <legend htmlFor="">Enter temperature in {this.scaleNames[this.state.scale]}:</legend>
                <input onChange={this.handleChange} type="text" value = {this.state.temperature}/>
                <ShowResult result = {this.state.result} />
            </fieldset>
        )
    }
}