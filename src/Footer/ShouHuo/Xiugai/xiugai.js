import React from 'react';
import {Button,Icon,Input,message} from 'antd';
import Axios from 'axios';
var Xiugaicss =require('./xiugai.css')
export default class XiugaiPage extends React.Component {
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
            url:"/consignee/alterInformation",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.err==2){
                message.info("修改失败")
            }else if(result.state==1){
                message.info("修改成功")
            }
        })
        
    }
    render(){
        return(
            <div className={Xiugaicss.All}><div className={Xiugaicss.header}>修改收货信息</div>
            <hr/>
            <div className={Xiugaicss.Body}>
                修改收货人：<Input type="text" name="name" placeholder="请输入您要修改的姓名" value={this.state.name} onChange={e=>this.changeValue(e)}/>
                <br/><br/>
                修改收货地址：<Input type="text" name="address" placeholder="请输入您新的收货地址" value={this.state.address} onChange={e=>this.changeValue(e)} />
                <br/><br/>
                修改联系方式：<Input type="number" name="phone" placeholder="请输入您新的移动电话号码" value={this.state.phone} onChange={e=>this.changeValue(e)}/>
                <br/><br/>
                <Button onClik={this.upload()}>确定</Button>
            </div>




            </div>
           
            
            
           

        )
        }
    }