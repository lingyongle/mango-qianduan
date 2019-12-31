import React from 'react';
import timg from './Goods5Img/timg.jpg';
import timg1 from './Goods5Img/timg1.jpg';
import timg2 from './Goods5Img/timg2.jpg';
import timg3 from './Goods5Img/timg3.jpg';
import timg4 from  './Goods5Img/timg4.jpg';
import timg5 from './Goods5Img/timg5.jpg';
import { Icon } from 'antd';
import {  Link } from "react-router-dom"

var Goods5css =require ('./goods5.css') 
export default class Goods5Page extends React.Component{
    render(){
        return(
            <div className={Goods5css.all}>
                <div className={Goods5css.header}>
                    <img src={timg5} className={Goods5css.headerimg}/>

                </div>
               <div className={Goods5css.accordian}>
        <ul>		
            <li>			
                <div className={Goods5css.image_title}>	
                    <a href="#">1</a>
                </div>		
                    <a href="#"> <img src={timg}/></a>
                	</li>		<li>			         
                <div className={Goods5css.image_title}>				
                    <a href="#">2</a>			
                </div>		
                    <a href="#"> <img src={timg1}/>	</a>		
                    </li>		<li>		
                <div className={Goods5css.image_title}> 
                    <a href="#">3</a>
                </div>		
                    <a href="#"> <img src={timg2}/>	</a>	
                	</li>		<li>		
            	<div className={Goods5css.image_title}>	
                    <a href="#">4</a>			
                </div>	
                    <a href="#"> <img src={timg3}/>	</a>		
                    </li>		<li>	
                <div className={Goods5css.image_title}>				
                    <a href="#">5</a>			
                </div>			
                    <a href="#"> <img src={timg4}/>	</a>		
            </li>	
        </ul>
        <p></p>
            </div>
            <div className={Goods5css.Product}>
                产品名称：吉禄芒
                <br></br>
                原价：6元/斤::现价：4元/斤
            </div>
               <div className={Goods5css.Explain}>
               产品介绍：攀枝花市海拔1400米以下属南亚热带气候，年均温19.5-21℃，发展中晚熟和晚熟芒果，
                            成熟期在7月下旬至9月下旬。由于本区冬春气温高，热量充足，有利于花期传粉座果；
                            而果实发育又与降雨期同步，病虫害少，果实着色好。果实宽卵形或长圆形而稍扁，平均单果重200-250 g或更大，
                            有明显的果咀。未熟果底色青绿，盖色紫红。 成熟后底色黄，盖色鲜红。果肉橙红色，肉质致密、腻滑，纤维极少。味甜芳香，品质较好。
               </div>
               <div className={Goods5css.footer}>
                   <Link to=''><div className={Goods5css.Icon1}><Icon type="message" style={{ fontSize: '40px' }} />联系商家</div></Link>
                   <Link to='addGood'><div className={Goods5css.Icon2}><Icon type="plus-circle" style={{ fontSize: '40px' }}/>加入购物车</div></Link>
                   <Link to=''><div className={Goods5css.Icon3}> <Icon type="paper-clip" style={{ fontSize: '40px' }}/>立即购买</div></Link>
               </div>
            </div>
        )
    }
}