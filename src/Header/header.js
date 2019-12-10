import React from 'react';
import timg from './HeaderImg/timg.jpg';
import timg1 from './HeaderImg/timg1.jpg';
import timg2 from './HeaderImg/timg2.jpg';
import timg3 from './HeaderImg/timg3.jpg';
import timg4 from './HeaderImg/timg4.jpg';
import { Link } from "react-router-dom";
import { Carousel, Icon } from 'antd';
var HeaderCss = require('./header.css')//css模块化
export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className={HeaderCss.Header}>
                    <Link to="/homepage"><Icon type="loading" style={{ fontSize: '30px' }} />Mango网热卖中...</Link>
                    <div className={HeaderCss.s}>
                        <form>
                            <input name="cname" type='text' placeholder='请输入您想要的水果'></input>
                            <button type="submit"></button>
                        </form>
                    </div>
                    <Link to="/login">登录/注册<Icon type="user" style={{ fontSize: '30px' }} /></Link></div>
                <div className={HeaderCss.demo}>
                    <div className={HeaderCss.demo1}>
                        <Carousel autoplay>
                            <div className={HeaderCss.img}>
                                <Link to='/goods5'> <img src={timg} className={HeaderCss.photo}></img>                            </Link></div>
                            <div className={HeaderCss.img}>
                                <Link to='/goods2'>	<img src={timg1} className={HeaderCss.photo}></img>
                                </Link>
                            </div>
                            <div className={HeaderCss.img}>
                                <Link to='/goods1'><img src={timg2} className={HeaderCss.photo}></img>
                                </Link> </div>
                            <div className={HeaderCss.img}>
                                <Link to='/goods3'><img src={timg3} className={HeaderCss.photo}></img>
                                </Link> </div>
                            <div className={HeaderCss.img}>
                                <Link to='/goods4'><img src={timg4} className={HeaderCss.photo}></img>
                                </Link>	 </div>
                        </Carousel>
                        <div className={HeaderCss.demo2}>
                            <h2>攀枝花芒果：</h2>
                            攀枝花地处北纬26°，地处西南内陆地区，属于南亚热带干热河谷气候，具有“南方热量，
                            北方光照”的优越条件，地貌类型复杂多样，以山地为主。这样的海拔与地势利于芒果吸收光热，
                        山地种植的通风透光条件好，利于传粉坐果。种植出的芒果具有甜大鲜的特点。<br></br>
                            攀枝花芒果花期无梅雨，果期无台风。由于光照强，热量足，相对干旱，有利于芒果生长、开花、结果，果型美，外观漂亮；昼夜温差大，
有利于果实中淀粉的积累和糖分的转化，可溶性固形物含量高、口感好，品质上乘。<br></br>
<div className={HeaderCss.searth}><a href="https://baike.baidu.com/item/%E6%94%80%E6%9E%9D%E8%8A%B1%E8%8A%92%E6%9E%9C/14902998?fr=aladdins" target="blank"><Icon type="search" style={{ fontSize: '20px' }}/>了解更多</a></div>

                        </div>
                    </div></div>

            </div>
        )
    }
}