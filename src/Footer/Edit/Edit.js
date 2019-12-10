import React from 'react'
import {Icon} from 'antd'
var EditCss = require('./Edit.css');

export default class EditPage extends React.Component {
    render(){
        return(

            <div className={EditCss.Edit}>
             <div align="center" className={EditCss.div1}><Icon type="edit"  style={{ fontSize: '40px' }}/>个人信息填写 </div>
            
               <div> <table  border= "1">
                <tr>
                <span>姓名： </span>
                <input type="text"  placeholder="请输入您的姓名"></input>
                </tr>
                <tr>
                <span>出生日期： </span>
                <input  type="date"  placeholder="请输入您的出生日期"></input>
                </tr>
                <tr>
                <span>性别： </span>
                <input type="text"  placeholder="请输入您的性别"></input>
                </tr> 
                <tr>
                <span>年龄： </span>
                <input type="text"  placeholder="请输入您的年龄"></input>
                </tr>
                <tr>
                <span>职业： </span>
                <input type="text"  placeholder="请输入您的职业"></input>
                </tr>
                <tr>
                <span>城市： </span>
                <input type="text"  placeholder="请输入您所在城市"></input>
                </tr>
                <tr>
                <span>个性签名： </span>
                <input type="text"  className={EditCss.Input5} ></input>
                </tr>
               
                
            </table>
            </div> 
  </div>)
        }
    }