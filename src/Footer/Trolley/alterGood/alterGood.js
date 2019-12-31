import React, { Component } from 'react';
import { Input,message, Button } from 'antd';
import Axios from 'axios';
var alterGoodcss = require('./alterGood.css');

class alterGood extends Component{
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
            "number":this.state.number,
        }

        Axios.post({
            url:"/good/alterGood",
            data:JSON.stringify(data)
        }).then(result=>{
            if (result.state==2) {
                message.info("修改失败")
            }else if (result.state==1) {
                message.info("修改成功")
            }
        })
    }
    render(){
        return(
            <div className={alterGoodcss.All}>
                <div className={alterGoodcss.Body}>
                用户id:
                <Input type="text" name="uid" value={this.state.uid} onChange={e=>this.changeValue(e)}/>
                <br/>
                商品id:
                <Input type="text" name="gid" value={this.state.gid} onChange={e=>this.changeValue(e)}/>
    
                商品数量:
                <Input type="text" name="number" value={this.state.number} onChange={e=>this.changeValue(e)}/>
                <Button onClick={this.upload}>确认修改</Button>
                </div>
            </div>
        )
    }
}
export default alterGood;