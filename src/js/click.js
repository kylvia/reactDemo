/**
 * Created by p00422 on 2017/7/11.
 */
import React from 'react';

export default class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState((state) => ({
            isToggleOn:!state.isToggleOn
        }));
    }
    render(){
        console.log('[render]',this.state.isToggleOn);
        return(
            <button onClick={this.toggle}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
