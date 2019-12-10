import React from 'react';
import timg from './Goods3Img/timg.jpg';
import timg1 from './Goods3Img/timg1.jpg';
import timg2 from './Goods3Img/timg2.jpg';
import timg3 from './Goods3Img/timg3.jpg';
import timg4 from  './Goods3Img/timg4.jpg';
import timg5 from './Goods3Img/timg5.jpg';
import { Icon } from 'antd';
import {  Link } from "react-router-dom"

var Goods4css =require ('./goods4.css') 
export default class Goods4Page extends React.Component{
    render(){
        return(
            <div className={Goods4css.all}>
                <div className={Goods4css.header}>
                    <img src={timg5} className={Goods4css.headerimg}/>

                </div>
               <div className={Goods4css.accordian}>
        <ul>		
            <li>			
                <div className={Goods4css.image_title}>	
                    <a href="#">1</a>
                </div>		
                    <a href="#"> <img src={timg}/></a>
                	</li>		<li>			         
                <div className={Goods4css.image_title}>				
                    <a href="#">2</a>			
                </div>		
                    <a href="#"> <img src={timg1}/>	</a>		
                    </li>		<li>		
                <div className={Goods4css.image_title}> 
                    <a href="#">3</a>
                </div>		
                    <a href="#"> <img src={timg2}/>	</a>	
                	</li>		<li>		
            	<div className={Goods4css.image_title}>	
                    <a href="#">4</a>			
                </div>	
                    <a href="#"> <img src={timg3}/>	</a>		
                    </li>		<li>	
                <div className={Goods4css.image_title}>				
                    <a href="#">5</a>			
                </div>			
                    <a href="#"> <img src={timg4}/>	</a>		
            </li>	
        </ul>
        <p></p>
            </div>
            <div className={Goods4css.Product}>
                产品名称：象牙芒
                <br></br>
                
                价格：3元/斤
            </div>
               <div className={Goods4css.Explain}>
               产品介绍：攀枝花象牙芒果，果实圆长肥大，一个重1斤左右，因果型如幼年象牙而得名。
                            果实成熟时呈金黄色，可食部份占72%，皮薄核小，果肉肥厚、鲜嫩、多汁，味美可口，香甜如蜜。
                            富含维生素A、B、C，除供鲜食外,可做蜜饯、果酱、果脯等被视为果类珍品，誉为热"水果之王"。
               </div>
               <div className={Goods4css.footer}>
                   <Link to=''><div className={Goods4css.Icon1}><Icon type="message" style={{ fontSize: '40px' }} />联系商家</div></Link>
                   <Link to=''><div className={Goods4css.Icon2}><Icon type="plus-circle" style={{ fontSize: '40px' }}/>加入购物车</div></Link>
                   <Link to=''><div className={Goods4css.Icon3}> <Icon type="paper-clip" style={{ fontSize: '40px' }}/>立即购买</div></Link>
               </div>
            </div>
        )
    }
}