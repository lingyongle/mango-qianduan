import React from 'react'

import Axios from 'axios';
import { message, Button } from 'antd';
import Image from '../bgi/3.jpg';
var FPasswordCss =require('./fpassword.css');

export default class FPasswordPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    uploadone=()=>{
        var data={
            "username":this.state.username,
            "password1":this.state.password1,
            "password2":this.state.password2,
        }
        Axios.post({
            url:"/user/alter",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("修改失败")
            }else if(result.state==1){
                message.info("修改成功")
            }
        })
    }
    render(){
        return(
            <div className={FPasswordCss.main}>
                <div className={FPasswordCss.k1}>
                </div>
                <div className={FPasswordCss.k2}>
                </div>
                <img src={Image} className={FPasswordCss.photo}></img>
                <div className={FPasswordCss.forgrt}>
                <div className={FPasswordCss.k}>
                    <p>用户(手机号)</p> 
                    <input type="text" maxLength="50" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}></input>
                </div>
                <div className={FPasswordCss.m}>
                    <p>原密码</p> 
                    <input type="password1" name="password1" value={this.state.password1} onChange={e=>this.changeValue(e)}></input>
                </div>
                <div className={FPasswordCss.n}>
                    <p>新密码</p> 
                    <input type="password2" name="password2" value={this.state.password2} onChange={e=>this.changeValue(e)}></input>
                </div>
                <div className={FPasswordCss.que}>
                <Button onClick={this.uploadone}>确定</Button>
                </div>
       </div>
            </div>
        )
    }
}