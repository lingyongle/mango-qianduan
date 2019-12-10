import React from 'react';
import timg from './Googs3Img/timg.jpg';
import timg1 from './Googs3Img/timg1.jpg';
import timg2 from './Googs3Img/timg2.jpg';
import timg3 from './Googs3Img/timg3.jpg';
import timg4 from './Googs3Img/timg4.jpg';
import timg5 from './Googs3Img/timg5.jpg';
import { Button, Icon } from 'antd';
import {  Link } from "react-router-dom"

var Goods3css =require ('./goods3.css') 
export default class Goods3Page extends React.Component{
    render(){
        return(
            <div className={Goods3css.all}>
                <div className={Goods3css.header}>
                    <img src={timg5} className={Goods3css.headerimg}/>

                </div>
               <div className={Goods3css.accordian}>
        <ul>		
            <li>			
                <div className={Goods3css.image_title}>	
                    <a href="#">1</a>
                </div>		
                    <a href="#"> <img src={timg}/></a>
                	</li>		<li>			         
                <div className={Goods3css.image_title}>				
                    <a href="#">2</a>			
                </div>		
                    <a href="#"> <img src={timg1}/>	</a>		
                    </li>		<li>		
                <div className={Goods3css.image_title}> 
                    <a href="#">3</a>
                </div>		
                    <a href="#"> <img src={timg2}/>	</a>	
                	</li>		<li>		
            	<div className={Goods3css.image_title}>	
                    <a href="#">4</a>			
                </div>	
                    <a href="#"> <img src={timg3}/>	</a>		
                    </li>		<li>	
                <div className={Goods3css.image_title}>				
                    <a href="#">5</a>			
                </div>			
                    <a href="#"> <img src={timg4}/>	</a>		
            </li>	
        </ul>
        <p></p>
            </div>
            
            <div className={Goods3css.Product}>
                产品名称：金煌芒
                <br></br>
                
                价格：8元/斤
            </div>
               <div className={Goods3css.Explain}>
               产品介绍：金煌芒，属于芒果的一个品种。果实长19.9厘米，宽10.1厘米，厚8.9厘米，
                            长椭圆形，果实特大，品质上等；种子多胚；果实成熟期6~7月。
                            金煌芒营养丰富，食用芒果具抗癌、美化肌肤、防治高血压、动脉硬化、防治便秘、
                            清肠胃的功效。果实除鲜食外，还可加工成果汁、果酱、糖水果片、蜜饯、盐渍品等食品，
                            此外，芒果叶的提取物还能抑制化脓球菌、大肠杆菌、绿脓杆菌，同时具有抑制流感病毒的作用。
               </div>
               <div className={Goods3css.footer}>
                   <Link to=''><div className={Goods3css.Icon1}><Icon type="message" style={{ fontSize: '40px' }} />联系商家</div></Link>
                   <Link to=''><div className={Goods3css.Icon2}><Icon type="plus-circle" style={{ fontSize: '40px' }}/>加入购物车</div></Link>
                   <Link to=''><div className={Goods3css.Icon3}> <Icon type="paper-clip" style={{ fontSize: '40px' }}/>立即购买</div></Link>
               </div>
            </div>
        )
    }
}