import React from 'react';
import {Link} from 'react-router-dom';
var shouhuocss =require('./shouhuo.css')
export default class ShouHuoPage extends React.Component{
    render(){
        return(
            <div className={shouhuocss.All}>
                <Link to="/Address">新建收货人</Link><br/>
                <Link to="/xiugai">修改收货人信息</Link><br/>
                <Link to="/shanchu">删除收货人</Link>

            </div>

            
        )
        
    }
}