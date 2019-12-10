import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import Image from '../Rsccuss/6.jpg'

var RsccussCss = require('./rsccuss.css');

export default class RsccussPage extends React.Component{
    render(){
        return(
            <div className={RsccussCss.main}>
                <img src={Image} className={RsccussCss.photo}></img>
                <div className={RsccussCss.t}>
                <Icon type="check-square" theme="twoTone" />
                    <p>注册成功</p>
                </div>
                <div className={RsccussCss.f}>
                <Icon type="rollback" />
                <Link to="/login"><input type="button" value="返回登录"></input></Link>
                </div>
            </div>
        )
    }
}