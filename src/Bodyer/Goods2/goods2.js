import React from 'react';
import timg from './Goods2Img/timg.jpg';
import timg1 from './Goods2Img/timg1.jpg';
import timg2 from './Goods2Img/timg2.jpg';
import timg3 from './Goods2Img/timg3.jpg';
import timg4 from  './Goods2Img/timg4.jpg';
import timg5 from './Goods2Img/timg5.jpg';
import { Button, Icon } from 'antd';
import {  Link } from "react-router-dom"

var Goods2css =require ('./goods2.css') 
export default class Goods2Page extends React.Component{
    render(){
        return(
            <div className={Goods2css.all}>
                <div className={Goods2css.header}>
                    <img src={timg5} className={Goods2css.headerimg}/>

                </div>
               <div className={Goods2css.accordian}>
        <ul>		
            <li>			
                <div className={Goods2css.image_title}>	
                    <a href="#">1</a>
                </div>		
                    <a href="#"> <img src={timg}/></a>
                	</li>		<li>			         
                <div className={Goods2css.image_title}>				
                    <a href="#">2</a>			
                </div>		
                    <a href="#"> <img src={timg1}/>	</a>		
                    </li>		<li>		
                <div className={Goods2css.image_title}> 
                    <a href="#">3</a>
                </div>		
                    <a href="#"> <img src={timg2}/>	</a>	
                	</li>		<li>		
            	<div className={Goods2css.image_title}>	
                    <a href="#">4</a>			
                </div>	
                    <a href="#"> <img src={timg3}/>	</a>		
                    </li>		<li>	
                <div className={Goods2css.image_title}>				
                    <a href="#">5</a>			
                </div>			
                    <a href="#"> <img src={timg4}/>	</a>		
            </li>	
        </ul>
        <p></p>
            </div>
            
            <div className={Goods2css.Product}>
                产品名称：凯特芒果
                <br></br>
                
                价格：4元/斤
            </div>
               <div className={Goods2css.Explain}>
               产品介绍：攀枝花芒果（凯特）果大，卵圆形，果鼻明显，果顶圆，果肩较平，果蒂直，果皮薄光滑，
                            果粉厚，果点密、小、白色。青果黄绿色，向阳面有红晕，熟果底色黄绿色、盖色紫红色，套袋果实熟果绿黄色。
                            果肉橙黄色、纤维极少，汁多、味甜，质地腻滑，香气浓，几乎无松香味。种子小、椭圆形   
               </div>
               <div className={Goods2css.footer}>
                   <Link to=''><div className={Goods2css.Icon1}><Icon type="message" style={{ fontSize: '40px' }} />联系商家</div></Link>
                   <Link to=''><div className={Goods2css.Icon2}><Icon type="plus-circle" style={{ fontSize: '40px' }}/>加入购物车</div></Link>
                   <Link to=''><div className={Goods2css.Icon3}> <Icon type="paper-clip" style={{ fontSize: '40px' }}/>立即购买</div></Link>
               </div>
            </div>
        )
    }
}