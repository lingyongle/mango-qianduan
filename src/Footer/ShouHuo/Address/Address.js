import React from 'react';
import {Button,Icon,Input,message} from 'antd';
import Axios from 'axios';
var Addresscss =require('./Address.css')
export default class AddressPage extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    upload = ()=>{
        var data={
            "name":this.state.name,
            "address":this.state.address,
            "phone":this.state.phone
        }
        Axios.post({
            url:"/consignee/addInformation",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.err==2){
                message.info("增加失败，收货人已存在")
            }else if(result.state==1){
                message.info("增加成功")
            }
        })
        
    }
    render(){
        return(
            <div className={Addresscss.All}><div className={Addresscss.header}>新增收货信息</div>
            <hr/>
            <div className={Addresscss.Body}>
                新增收货人：<Input type="text" name="name"  placeholder="请输入您的姓名" value={this.state.name} onChange={e=>this.changeValue(e)}/>
                <br/><br/>
                新增收货地址：<Input type="text" name="address" placeholder="请输入您的收货地址" value={this.state.address} onChange={e=>this.changeValue(e)} />
                <br/><br/>
                新增联系方式：<Input type="number" name="phone" placeholder="请输入您的移动电话号码" value={this.state.phone} onChange={e=>this.changeValue(e)}/>
                <br/><br/>
                <Button onClik={this.upload()}>确定</Button>
            </div>




            </div>
           
            
            
           

        )
        }
    }