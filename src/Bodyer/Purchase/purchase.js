import React from 'react';
import {Button,Icon} from 'antd';

var Purchasecss =require('./purchase.css')

export default class purchase extends React.Component{
    render(){
        return(
            <div className={Purchasecss.all}>
                <div className={Purchasecss.header}>填写订单</div>
                <br/>
                <div className={Purchasecss.body}>
                   <div>收货人信息：</div>
                   <br/>
                   <div><strong>支付方式</strong>：<label><input type="checkbox" name="zhifubao" value=""/><Icon type="alipay-circle"  />支付宝支付</label>
                   <label><input type="checkbox" name="wechat" value=""/><Icon type="wechat" />微信支付</label>
                   <label><input type="checkbox" name="QQ" value=""/><Icon type="qq" />QQ支付</label></div> 
                   <div>商品信息：</div>
                </div>
                <div className={Purchasecss.footer}>
                    <a>支付</a>
                </div>
                
            </div>
            
        )
    }

}