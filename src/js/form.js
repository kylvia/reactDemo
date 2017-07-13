/**
 * Created by p00422 on 2017/7/11.
 */
import React from 'react';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    formSubmit(e){
        console.log('[formSubmit]');
        alert('name:'+this.state.value+' submit success!');
        e.preventDefault();
    }
    inputChange(e){
        console.log('[inputChange]');
        this.setState({value: e.target.value});
    }
    render(){
        console.log('[render]',this.state.value);
        return(
            <form onSubmit={this.formSubmit} action="">
                <label>name:</label>
                <textarea value={this.state.value} type="text" onChange={this.inputChange} />
                <input value="submit" type="submit"/>
            </form>
        )
    }
}
