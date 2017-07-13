/**
 * Created by p00422 on 2017/7/11.
 */
//多个输入框
import React from 'react';

export default class MultipleInp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuest: 2
        };
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render(){
        return(
        <form>
            <label>is going:<input onChange={this.inputChange} name="isGoing" type="checkbox" checked={this.state.isGoing}/></label>

            <br />
            <label>number of guest:<input onChange={this.inputChange} name="numberOfGuest" type="number" value={this.state.numberOfGuest}/></label>
            <br />
            <input type="submit" value="submit" />
        </form>
        )
    }
}
