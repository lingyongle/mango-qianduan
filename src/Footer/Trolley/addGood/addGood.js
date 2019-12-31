import React, { Component } from 'react';
import { Input,message, Button } from 'antd';
import Axios from 'axios';
var addGoodcss = require('./addGood.css');

class addGood extends Component{
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
            "price":this.state.price,
            "photo":this.state.photo,
            "number":this.state.number,
        }

        Axios.post({
            url:"/good/addGood",
            data:JSON.stringify(data)
        }).then(result=>{
            if (result.state==2) {
                message.info("增添失败")
            }else if (result.state==1) {
                message.info("添加成功")
            }
        })
    }
    render(){
        return(
            
            <div className={addGoodcss.all}>
                <div className={addGoodcss.body}>
                用户id:
                <Input type="text" name="uid" value={this.state.uid} onChange={e=>this.changeValue(e)}/>
                <br/>
                商品id:
                <Input type="text" name="gid" value={this.state.gid} onChange={e=>this.changeValue(e)}/>
                商品名称:
                <Input type="text" name="goodname" value={this.state.goodnamne} onChange={e=>this.changeValue(e)}/>
                商品价格:
                <Input type="text" name="price" value={this.state.price} onChange={e=>this.changeValue(e)}/>
                商品类别:
                <Input type="text" name="photo" value={this.state.photo} onChange={e=>this.changeValue(e)}/>
                商品数量:
                <Input type="text" name="number" value={this.state.number} onChange={e=>this.changeValue(e)}/>
                <Button onClick={this.upload}>加入购物车</Button>

                </div>
            </div>
        )
    }
}
export default addGood;