import React from 'react';
var IntroduceCss = require('./Introduce.css');
export default class IntroducePage extends React.Component{
    render(){
        return(
            <div className={IntroduceCss.all}>
           <h2 className={IntroduceCss.top}>芒果分类</h2> 
           <div className={IntroduceCss.type}>
                <div >
                    <a href="https://baike.baidu.com/item/%E8%B4%B5%E5%A6%83%E8%8A%92/16478867?fr=aladdin">红贵妃</a>
                </div>
                <div >
                <a  href="https://baike.baidu.com/item/%E5%87%AF%E7%89%B9%E8%8A%92/2992412?fr=aladdin">凯特芒</a>
                </div>
                <div >
                <a  href="https://baike.baidu.com/item/%E9%87%91%E7%85%8C%E8%8A%92/6683497?fr=aladdin">金煌芒</a>
                </div>
                <div >
                <a  href="">小草芒</a>
                </div>
                <div >
                <a  href="https://baike.baidu.com/item/%E7%94%B0%E9%98%B3%E9%A6%99%E8%8A%92/7042349">田阳香芒</a>
                </div>
                </div>

        
            </div>
        )
    }
}