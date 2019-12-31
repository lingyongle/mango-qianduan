import React from 'react'
import {Link} from 'react-router-dom';
var SetCss = require('./Set.css');
export default class SetPage extends React.Component {
    render(){
        return(
            <div className={SetCss.Set}>
            <div border="1" className={SetCss.Set1}>设置</div>
            <div>
            <table  border="1">
                <tr>
                    <td><Link to="/Edit">编辑资料</Link></td>
                </tr>
                <tr>
                    <td><Link to="/ShouHuo">编辑收货信息</Link></td>
                </tr>
                <tr>
                    <td><Link to="/Safe">账户安全</Link></td>
                </tr>
                <tr>
                    <td><Link to="/AddressSet">地区设置</Link></td>
                </tr>
                <tr>
                    <td><Link to="/homepage">退出当前用户</Link></td>
                </tr>
               
            </table>
            </div>
            </div>
        )
    }

}