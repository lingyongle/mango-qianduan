import React from 'react'

var ConnectCss = require('./Connect.css');
export default class ConnectPage extends React.Component {
    render(){
        return(
            <div className={ConnectCss.Connect}>
            <h2>联系客服</h2>
               <div>
                <table>
                <tr>客服电话：15808116311</tr>
                <tr>客服邮箱：2018181182@qq.com</tr>
                </table>
               </div>
            </div>
        )            
    }

}