/**
 * Created by p00422 on 2017/7/12.
 */
import React from 'react';
import Conversion from './conversion';

export default class TemperatureTemp extends React.Component{
    render(){
        return (
            <div>
                <Conversion scale = 'c'/>
                <Conversion scale = 'f'/>
            </div>
        )
    }
}