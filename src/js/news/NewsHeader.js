/**
 * Created by p00422 on 2017/7/7.
 */
import React from 'react';
import Mock from 'mockjs';
import Moment from 'moment';
import imageLogo from '../../image/y18.gif';
import '../../less/NewsHeader.less';
export default class NewsHeader extends React.Component{
  getLogo(){
    return(
      <div className="newHeader-logo">
        <a href=""><img src={imageLogo} alt=""/></a>
      </div>
    )
  }
  getTitle(){
    return(
      <div class="newHeader-title">
        <a href="" className="newHeader-textLink">Hacker News</a>
      </div>
    )
  }
    getLogin(){
        return(
            <div className="newsHeader-login">
                <a href="" className="newsHeader-textLink">login</a>
            </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    getCurTime(){
        //return <div className="curTime"><span>{Moment().format('YYYY-MM-DD HH:mm:ss')}</span></div>
        return <div className="curTime"><span>{this.state.date.toLocaleTimeString()}</span></div>
    }
    getNav(){
        var data=Mock.mock({
            "navLinks|3-8":[{
                name:"@word(3, 5)",
                url:"@word(3, 8)"
            }]
        });
        return(
            <div className="newsHeader-nav">
                {
                    data.navLinks.map(function(navLink){
                        return(
                            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/"+navLink.url}>{navLink.name}</a>
                        );
                    })
                }
            </div>
        )
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
  render(){

    return(
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
          {this.getNav()}
          {this.getCurTime()}
          {this.getLogin()}
      </div>
    );
  }
}

