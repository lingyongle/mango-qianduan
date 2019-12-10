import React from 'react'
import {Link} from 'react-router-dom';
import Image from '../Login/bgi/3.jpg';
var LoginCss = require('../Login/login.css');




export default class LoginPage extends React.Component{

    render(){
        return(
            <div className={LoginCss.amin}>
                <div className={LoginCss.k1}>
                </div>
                <div className={LoginCss.k2}>
                </div>
                <img src={Image} className={LoginCss.photo}></img>
                <div className={LoginCss.y}>
                    <p>用户(手机号)</p> 
                    <input type="y"></input>
                </div>
                <div className={LoginCss.m}>
                    <p>密码</p> 
                    <input type="password"></input>
                </div>
                <div className={LoginCss.d}>
                    <Link to="/lsccuss"><input type="button" value="登录"></input></Link>
                    <Link to="/registe">注册</Link>
                </div>
                <div className={LoginCss.w}>
                    <Link to="/fpassword">忘记密码</Link>
                </div>
            </div>
        )
    }
}