import React from 'react';
import {Link}from 'react-router-dom';

var EndCss = require('./End.css');
export default class EndPage extends React.Component {
    render(){
        return(
            <div className={EndCss.End}>
                <Link to="/homepage">退出登录</Link>
                </div>
        )
    }

}