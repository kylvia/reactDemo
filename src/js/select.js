/**
 * Created by p00422 on 2017/7/11.
 */
import React from 'react';

export default class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:'coconut'};
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    formSubmit(e){
        alert('Your favorite flavor is: '+this.state.value);
        e.preventDefault();
    }
    inputChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return(
        <form action="" onSubmit={this.formSubmit}>
            <label for="">Pick your favorite La Croix flavor:</label>
            <select value={this.state.value} name="" id="" onChange={this.inputChange}>
                <option value="grapefruit">grapefruit</option>
                <option value="lime">lime</option>
                <option value="coconut">coconut</option>
                <option value="mango">mango</option>
            </select>
            <input type="submit" value="submit" />
        </form>
        )
    }
}
