/**
 * Created by p00422 on 2017/7/12.
 */
import React from 'react';
import TemperatureInput from './TemperatureInput';

export default class TemperatureTemp extends React.Component{
    render(){
        return (
            <div>
                <TemperatureInput scale = 'c'/>
                <TemperatureInput scale = 'f'/>
            </div>
        )
    }
}