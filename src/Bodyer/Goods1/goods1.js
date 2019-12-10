import React from 'react';
import timg from './Goods1Img/timg.jpg';
import timg1 from './Goods1Img/timg1.jpg';
import timg2 from './Goods1Img/timg2.jpg';
import timg3 from './Goods1Img/timg3.jpg';
import timg4 from  './Goods1Img/timg4.jpg';
import timg5 from './Goods1Img/timg5.jpg';
import {  Icon } from 'antd';
import {  Link } from "react-router-dom";

var Goods1css =require ('./goods1.css') 
export default class Goods1Page extends React.Component{
    render(){
        return(
            <div className={Goods1css.all}>
                <div className={Goods1css.header}>
                    <img src={timg5} className={Goods1css.headerimg}/>

                </div>
               <div className={Goods1css.accordian}>
        <ul>		
            <li>			
                <div className={Goods1css.image_title}>	
                    <a href="#">1</a>
                </div>		
                    <a href="#"> <img src={timg}/></a>
                	</li>		<li>			         
                <div className={Goods1css.image_title}>				
                    <a href="#">2</a>			
                </div>		
                    <a href="#"> <img src={timg1}/>	</a>		
                    </li>		<li>		
                <div className={Goods1css.image_title}> 
                    <a href="#">3</a>
                </div>		
                    <a href="#"> <img src={timg2}/>	</a>	
                	</li>		<li>		
            	<div className={Goods1css.image_title}>	
                    <a href="#">4</a>			
                </div>	
                    <a href="#"> <img src={timg3}/>	</a>		
                    </li>		<li>	
                <div className={Goods1css.image_title}>				
                    <a href="#">5</a>			
                </div>			
                    <a href="#"> <img src={timg4}/>	</a>		
            </li>	
        </ul>
        <p></p>
            </div>
            
            <div className={Goods1css.Product}>
                产品名称：贵妃芒
                <br></br>
                原价:<del>10元/斤</del>：：
                 现价:6元/斤
               
            </div>
               <div className={Goods1css.Explain}>
               产品介绍：贵妃芒果在我国古代历史上是宫廷贡品中最受喜爱的果品，又称其为“ 贵妃 ”。
                            本店贵妃芒果产于攀枝花自家果园，贵妃芒果被省农业厅确定为无公害农产品，
                            先后被世界粮农组织和中国果菜大赛委会评为“中国果后”，所以说“来过攀枝花，芒果忘不了”。
                            贵妃芒果肉厚核薄，香甜爽口，果汁丰富，百吃不腻，回味无穷。

               </div>
               <div className={Goods1css.footer}>
                   <Link to='/Connect'><div className={Goods1css.Icon1}><Icon type="message" style={{ fontSize: '40px' }} />联系商家</div></Link>
                   <Link to=''><div className={Goods1css.Icon2}><Icon type="plus-circle" style={{ fontSize: '40px' }}/>加入购物车</div></Link>
                   <Link to='/purchase'><div className={Goods1css.Icon3}> <Icon type="paper-clip" style={{ fontSize: '40px' }}/>立即购买</div></Link>
               </div>
            </div>
        )
    }
}