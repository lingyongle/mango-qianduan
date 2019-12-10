import React from 'react'

import {Link} from 'react-router-dom'
import Image from '../bgi/4.jpg'
var RegisteCss = require('./registe.css');

export default class RegistePage extends React.Component{
    render(){
        return(
            <div className={RegisteCss.amin}>
                <div className={RegisteCss.k1}>
                </div>
                <div className={RegisteCss.k2}>
                </div>
                <img src={Image} className={RegisteCss.photo}></img>
                
                
                <div className={RegisteCss.y}>
                    <p>用户(手机号)</p> 
                    <input type="y"></input>
                </div>
                <div className={RegisteCss.m}>
                    <p>密码</p> 
                    <input type="password"></input>
                </div>
                <div className={RegisteCss.z}>
                    <Link to="/rsccuss"><input type="button" value="确认注册"></input></Link>
                    <Link to="/login"><input type="button" value="返回登录"></input></Link>
                </div>
            </div>
        )
    }
}