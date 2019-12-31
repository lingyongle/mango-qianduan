import React from 'react'

import {Link} from 'react-router-dom'
import Image from '../bgi/4.jpg'
import Axios from 'axios';
import { message, Button } from 'antd';
var RegisteCss = require('./registe.css');

export default class RegistePage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload=()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
        }
        Axios.post({
            url:"/user/register",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("用户名已存在")
            }else if(result.state==1){
                message.info("注册成功")
            }
        })
    }
    render(){
        return(
            <div className={RegisteCss.amin}>
                <div className={RegisteCss.k1}>
                </div>
                <div className={RegisteCss.k2}>
                </div>
                <img src={Image} className={RegisteCss.photo}></img>
                <div className={RegisteCss.zhuce}>
                <div className={RegisteCss.y}>
                    <p>用户(手机号)</p> 
                    <input type="text" maxLength="50" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}></input>
                </div>
                <div className={RegisteCss.m}>
                    <p>密码</p> 
                    <input type="password" name="password" value={this.state.password} onChange={e=>this.changeValue(e)}></input>
                </div>
                <div className={RegisteCss.z}>
                    <Button onClick={this.upload} className={RegisteCss.g1}>注册</Button>
                    <Link to="/login"><Button className={RegisteCss.g2}>返回登录</Button></Link>
                </div>
            </div>
            </div>
        )
    }
}