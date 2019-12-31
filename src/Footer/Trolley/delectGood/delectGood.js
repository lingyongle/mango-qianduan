import React, { Component } from 'react';
import { Input,message, Button } from 'antd';
import Axios from 'axios';
var delectGoodcss = require('./delectGood.css');

class delectGood extends Component{
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
            "uid":this.state.uid,
            "gid":this.state.gid,
            "goodname":this.state.uid,
        }

        Axios.post({
            url:"/good/delectGood",
            data:JSON.stringify(data)
        }).then(result=>{
            if (result.state==2) {
                message.info("删除失败")
            }else if (result.state==1) {
                message.info("删除成功")
            }
        })
    }
    render(){
        return(
            <div className={delectGoodcss.All}>
                <div className={delectGoodcss.Body}>
                用户id:
                <Input type="text" name="uid" value={this.state.uid} onChange={e=>this.changeValue(e)}/>
                <br/>
                商品id:
                <Input type="text" name="gid" value={this.state.gid} onChange={e=>this.changeValue(e)}/>
                商品名称:
                <Input type="text" name="goodname" value={this.state.goodnamne} onChange={e=>this.changeValue(e)}/>
               
                <Button onClick={this.upload}>从购物车中移除</Button>
                </div>
            </div>
        )
    }
}
export default delectGood;