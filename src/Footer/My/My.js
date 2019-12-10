import React from 'react';

import {Link} from 'react-router-dom';
import{Icon}from 'antd';
var MyCss = require('./My.css');
export default class MyPage extends React.Component{
    render(){
        return(
            <div className={MyCss.My} border="1">
               
            <div className={MyCss.My2}>
                <table >
                    <tr className={MyCss.My3}>我的</tr>
                    <tr>
                        <ul>
                    <li><Link to="/FaHuo"><Icon type="forward" style={{ fontSize: '20px' }}/>催发货</Link></li></ul>
                </tr>
                    <tr> 
                        <ul>
                    <li><Link to="/WuLiu"><Icon type="right-circle" style={{ fontSize: '20px' }}/>物流信息</Link></li></ul></tr>
                    <tr>
                        <ul>
                    <li><Link to="/Set"> <Icon type="setting"  style={{ fontSize: '20px' }}/>设置</Link> </li></ul></tr>
                   
                    <tr>
                        <ul>
                    <li><Link to="/Connect"><Icon type="phone" style={{ fontSize: '20px' }}/>联系客服</Link></li></ul></tr>
                    <tr>
                        <ul> 
                    <li><Link to="/End"><Icon type="logout"  style={{ fontSize: '20px' }}/>退出登录</Link></li> </ul> </tr>
                </table>
                
            </div> 
         </div>
        )
    }
}