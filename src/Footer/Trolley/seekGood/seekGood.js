import React, { Component } from 'react';
import { Input,message, Button } from 'antd';
import Axios from 'axios';
var seekGoodcss = require('./seekGood.css');

class seekGood extends Component{
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
        }

        Axios.post({
            url:"/good/seekGood",
            data:JSON.stringify(data)
        }).then(result=>{
            if (result.state==2) {
                message.info("获取失败")
            }else if (result.state==1) {
                message.info("查看获取成功")
            }
        })
    }
    render(){
        return(
            <div className={seekGoodcss.All}>
                <div className={seekGoodcss.Bodys}>
                用户id:
                <Input type="text" name="uid" value={this.state.uid} onChange={e=>this.changeValue(e)}/>
                <br/>
                
                <Button onClick={this.upload}>查看获取</Button>
                </div>
            </div>
        )
    }
}
export default seekGood;