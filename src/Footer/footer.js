import React from 'react'
import {Link} from 'react-router-dom';
import {Icon} from 'antd'

var FooterCss = require('./footer.css');
export default class Footer extends React.Component{
    render(){
        return(
           
            <div className={FooterCss.Footer}>
               <Link to="/Introduce">产品介绍<Icon type="bulb" style={{ fontSize: '30px' }}/></Link>
               <Link to="/Trolley">购物车<Icon type="shopping-cart" style={{ fontSize: '30px' }}/></Link>
               <Link to="/My">我的<Icon type="home"style={{ fontSize: '30px' }} /></Link>
            </div>
        )
    }
}