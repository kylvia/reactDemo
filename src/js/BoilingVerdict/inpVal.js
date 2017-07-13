/**
 * Created by p00422 on 2017/7/12.
 */
import React from 'react';
import BoilingVerdict from './BoilingVerdict'
export default class InpVal extends React.Component{
    constructor(props){
        super(props);
        this.state={temperature:''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({temperature: e.target.value })
    }
    render(){
        return(
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input type="text" value = {this.state.temperature} onChange={this.handleChange}/>
            <BoilingVerdict celsius = {parseFloat(this.state.temperature)} />
        </fieldset>
        )
    }
}