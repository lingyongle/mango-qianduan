import React from 'react'
import {Link} from 'react-router-dom';
import Image from '../Login/bgi/3.jpg';
import { Button, message } from 'antd';
import Axios from 'axios';
var LoginCss = require('../Login/login.css');


export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    land=()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
        }
        Axios.post({
            url:"/user/login",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("登录成功！")
            }else{
            message.info("用户名或密码错误")
            }
        })
    }
    render(){
        return(
            <div className={LoginCss.amin}>
                <div className={LoginCss.k1}>
                </div>
                <div className={LoginCss.k2}>
                </div>
                <img src={Image} className={LoginCss.photo}></img>
                <div className={LoginCss.landing}>
                <div className={LoginCss.y}>
                    <p>用户(手机号)</p> 
                    <input type="text" maxLength="50" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}></input>
                </div>
                <div className={LoginCss.m}>
                    <p>密码</p> 
                    <input type="password" name="password" value={this.state.password} onChange={e=>this.changeValue(e)}></input>
                </div>
                <div className={LoginCss.d}>
                    <Button onClick={this.land}>登录</Button>
                    <Link to="/registe" className={LoginCss.a1}>注册</Link>
                    <Link to="/fpassword" className={LoginCss.a2}>忘记密码</Link>
                    </div>
                </div>
            </div>
        )
    }
}