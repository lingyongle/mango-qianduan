import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd';

import Image from '../bgi/5.jpg'

var LsccussCss = require('./lsccuss.css');

export default class LsccussPage extends React.Component{
    render(){
        return(
            <div className={LsccussCss.main}>
                <img src={Image} className={LsccussCss.photo}></img>
                <div className={LsccussCss.t}>
                    <Icon type="check-square" theme="twoTone" />
                    <p>登录成功</p>
                </div>
                <div className={LsccussCss.f}>
                <Icon type="rollback" />
                <Link to="/homepage"><input type="button" value="返回首页"></input></Link>
                </div>
            </div>
        )
    }
}