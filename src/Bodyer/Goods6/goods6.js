import React from 'react';
import timg from './Goods6Img/timg.jpg';
import timg1 from './Goods6Img/timg1.jpg';
import timg2 from './Goods6Img/timg2.jpg';
import timg3 from './Goods6Img/timg3.jpg';
import timg4 from  './Goods6Img/timg4.jpg';
import timg5 from './Goods6Img/timg5.jpg';
import { Icon } from 'antd';
import {  Link } from "react-router-dom"

var Goods6css =require ('./goods6.css') 
export default class Goods6Page extends React.Component{
    render(){
        return(
            <div className={Goods6css.all}>
                <div className={Goods6css.header}>
                    <img src={timg5} className={Goods6css.headerimg}/>

                </div>
               <div className={Goods6css.accordian}>
        <ul>		
            <li>			
                <div className={Goods6css.image_title}>	
                    <a href="#">1</a>
                </div>		
                    <a href="#"> <img src={timg}/></a>
                	</li>		<li>			         
                <div className={Goods6css.image_title}>				
                    <a href="#">2</a>			
                </div>		
                    <a href="#"> <img src={timg1}/>	</a>		
                    </li>		<li>		
                <div className={Goods6css.image_title}> 
                    <a href="#">3</a>
                </div>		
                    <a href="#"> <img src={timg2}/>	</a>	
                	</li>		<li>		
            	<div className={Goods6css.image_title}>	
                    <a href="#">4</a>			
                </div>	
                    <a href="#"> <img src={timg3}/>	</a>		
                    </li>		<li>	
                <div className={Goods6css.image_title}>				
                    <a href="#">5</a>			
                </div>			
                    <a href="#"> <img src={timg4}/>	</a>		
            </li>	
        </ul>
        <p></p>
            </div>
            <div className={Goods6css.Product}>
                产品名称：香芒
                <br></br>
                
                价格：8元/斤
            </div>
               <div className={Goods6css.Explain}>
               产品介绍：功效主治：
                            益胃止呕，解渴利尿。主治口渴咽干，食欲不振，消化不良，晕眩呕吐，咽痛音哑，咳嗽痰多，气喘等病症。
                            六年生树株产30~40公斤，每公顷12000~15000公斤，6月上旬至7月上旬果实成熟。
                            果呈椭圆形，果腹面有微腹沟，果脐不明显，皮薄光滑，淡绿色，后熟后转为鲜黄色，无胚果表皮粗糙。
                            果肉橙黄色，纤维级少而短，果汁多，肉质细嫩，香甜。正常果单果重200~300克，可食部分75%，可溶性固形物16~20%，
                            含糖量17%，淀粉12.4%，维生素C32~40mg/g。
               </div>
               <div className={Goods6css.footer}>
                   <Link to=''><div className={Goods6css.Icon1}><Icon type="message" style={{ fontSize: '40px' }} />联系商家</div></Link>
                   <Link to='addGood'><div className={Goods6css.Icon2}><Icon type="plus-circle" style={{ fontSize: '40px' }}/>加入购物车</div></Link>
                   <Link to=''><div className={Goods6css.Icon3}> <Icon type="paper-clip" style={{ fontSize: '40px' }}/>立即购买</div></Link>
               </div>
            </div>
        )
    }
}