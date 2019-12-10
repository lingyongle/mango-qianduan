import React from 'react'

var AddressCss = require('./Address.css');
export default class AddressPage extends React.Component {
    render(){
        return(
            <div className={AddressCss.Address}>
                <div border="1" className={AddressCss.Add}>编辑收货地址</div>
            <div className={AddressCss.Address2}>
            
            <table>
                <tr><span>我的收货地址：</span>
                <input type="text" placeholder="输入您的收货地址"></input>
                </tr></table>
            
            </div>
            </div>
            

        )
        }
    }