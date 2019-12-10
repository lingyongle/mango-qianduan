import React from 'react'

import {Input} from 'antd'
import {Button} from 'antd'
import Image from '../bgi/1.gif';
var FPasswordCss =require('./fpassword.css');

export default class FPasswordPage extends React.Component{
    render(){
        return(
            <div className={FPasswordCss.main}>
                
                <img src={Image} className={FPasswordCss.photo}></img>
                
                <div className={FPasswordCss.p}>
                    <p>忘记密码了？输入要找回的账号</p>
                </div>
                <div className={FPasswordCss.k}>
                    <Input size="large" placeholder="用户（手机号）" />
                </div>
                <div className={FPasswordCss.y}>
                    <input type="button" value="发送验证码"></input>
                    <Input size="large" placeholder="请输入验证码" />
                </div>
                <div className={FPasswordCss.q}>
                    <Button type="primary" block> 确定</Button>

                </div>
            </div>
        )
    }
}