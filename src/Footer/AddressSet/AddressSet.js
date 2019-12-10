import React from 'react'
import {Icon}from 'antd'
var AddressSetCss = require('./AddressSet.css');
export default class AddressSetPage extends React.Component {
   
    render(){
        return(
            <div className={AddressSetCss.AddressSet}>
            <div border="1"> <Icon type="environment" style={{ fontSize: '30px' }}/>地址设置</div>
            <input type="text" placeholder="请输入您的所在地"></input>
            </div>

        )
        }
    }