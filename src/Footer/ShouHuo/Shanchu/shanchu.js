import React from 'react';
import {Button,Icon,Input,message} from 'antd';
import Axios from 'axios';
var Shanchucss=require('./shanchu.css')
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
            
        }
        Axios.post({
            url:"/consignee/delectInformation",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.err==2){
                message.info("删除失败")
            }else if(result.state==1){
                message.info("删除成功")
            }
        })
        
    }
    render(){
        return(
            <div className={Shanchucss.All}><div className={Shanchucss.header}>删除收货人</div>
            <hr/>
            <div className={Shanchucss.Body}>
                删除收货人：<Input type="text" name="name" placeholder="请输入您要删除的收货人"   value={this.state.name} onChange={e=>this.changeValue(e)}/>
                <br/><br/>
                <Button onClik={this.upload()}>删除</Button>
            </div>




            </div>
           
            
            
           

        )
        }
    }