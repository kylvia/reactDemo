import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

// 1、News
/*import NewsList from './news/NewsList.js';
import '../less/common.less';

function get(url) {
    return Promise.resolve($.ajax(url));
}
get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(stories => {

        return Promise.all(stories.slice(0, 30)
            .map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')))
    })
    .then(items => render(<NewsList items={items}/>, $('#content')[0]))
    .catch(err => console.log('error occur', err));*/
/*//2、test
import Text from './test.js'
render(<Text ite = "Lisa" />, $('#content')[0]);*/
/*//3、test
import Toggle from './click'
render(<Toggle />, $('#content')[0]);*/
/*//4、List&Keys
import ListKeys from './ListKeys';

var numbers = [{id:1,name:'zhangsan'},{id:2,name:'lisi'},{id:5,name:'wangwu'}];
render(<ListKeys numbers = {numbers} />,$('#content')[0]);*/
/*//5、form
import Form from './form'
render(<Form />,$('#content')[0]);*/
/*//6、Select
import Select from './select'
render(<Select />,$('#content')[0]);*/
//7、multipleInp
/*
import InpVal from './BoilingVerdict/inpVal'
render(<InpVal />,$('#content')[0]);*/
//8、TemperatureTemp
/*import TemperatureTemp from './TemperatureInput/TemperatureTemp'
render(<TemperatureTemp />,$('#content')[0]);*/
//9、conversion
import TemperatureTemp from './conversion/TemperatureTemp'
render(<TemperatureTemp />,$('#content')[0]);
