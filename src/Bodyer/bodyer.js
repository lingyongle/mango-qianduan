import React from 'react';
import timg from './Bodyerimg/timg.jpg';
import timg1 from './Bodyerimg/timg1.jpg';
import timg2 from './Bodyerimg/timg2.jpg';
import timg3 from './Bodyerimg/timg3.jpg';
import timg4 from './Bodyerimg/timg4.jpg';
import timg5 from './Bodyerimg/timg5.jpg';
import { Link } from 'react-router-dom';
import goods1 from './Goods1/goods1';
import goods2 from './Goods2/goods2';
import goods3 from './Goods3/goods3';
import goods4 from './Goods4/goods4';
var Bodyercss = require('./bodyer.css')


export default class Bodyer extends React.Component {
 
    render() {
        return (
            <div>
            <div className={Bodyercss.massing}>
                <div className={Bodyercss.first}>
                <Link to='/goods1'>
                        <div className={Bodyercss.first1}>
                        <div className={Bodyercss.first11}>
                            <img src={timg} alt="图片"/>
                        </div>
                        <div className={Bodyercss.first12}>
                            产品名称：贵妃芒
                            <br></br>
                            <br></br>
                            原价：<del>10元/斤</del>
                            <br></br>
                            价格：6元/斤
                            <br></br>
                            <br></br>
                            产品介绍：贵妃芒果在我国古代历史上是宫廷贡品中最受喜爱的果品，又称其为“ 贵妃 ”。
                            本店贵妃芒果产于攀枝花自家果园，贵妃芒果被省农业厅确定为无公害农产品，
                            先后被世界粮农组织和中国果菜大赛委会评为“中国果后”，所以说“来过攀枝花，芒果忘不了”。
                            贵妃芒果肉厚核薄，香甜爽口，果汁丰富，百吃不腻，回味无穷。

                        </div>
                    </div>
                    </Link>
                    
                    
                </div>


                <div className={Bodyercss.second}>
                    <Link to='./goods2'> 
                    <div className={Bodyercss.second1}>
                        <div className={Bodyercss.second11}>
                        <img src={timg1} alt="图片"/>
                        </div>
                        <div className={Bodyercss.second12}>
                        产品名称：凯特芒
                            <br></br>
                            <br></br>
                            价格：4元/斤
                            <br></br>
                            <br></br>
                            产品介绍：攀枝花芒果（凯特）果大，卵圆形，果鼻明显，果顶圆，果肩较平，果蒂直，果皮薄光滑，
                            果粉厚，果点密、小、白色。青果黄绿色，向阳面有红晕，熟果底色黄绿色、盖色紫红色，套袋果实熟果绿黄色。
                            果肉橙黄色、纤维极少，汁多、味甜，质地腻滑，香气浓，几乎无松香味。种子小、椭圆形
                        </div>
                    </div></Link>
                   
                </div>


                <div className={Bodyercss.third}>
                    <Link to='./goods3'>
                        <div className={Bodyercss.third1}>
                        <div className={Bodyercss.third11}>
                        <img src={timg2} alt="图片"/>
                        </div>
                        <div className={Bodyercss.third12}>
                        产品名称：金煌芒
                            <br></br>
                            <br></br>
                            价格：8元/斤
                            <br></br>
                            <br></br>
                            产品介绍：金煌芒，属于芒果的一个品种。果实长19.9厘米，宽10.1厘米，厚8.9厘米，
                            长椭圆形，果实特大，品质上等；种子多胚；果实成熟期6~7月。
                            金煌芒营养丰富，食用芒果具抗癌、美化肌肤、防治高血压、动脉硬化、防治便秘、
                            清肠胃的功效。果实除鲜食外，还可加工成果汁、果酱、糖水果片、蜜饯、盐渍品等食品，
                            此外，芒果叶的提取物还能抑制化脓球菌、大肠杆菌、绿脓杆菌，同时具有抑制流感病毒的作用。
                        </div>
                    </div>
                    </Link>
                    
                </div>


                <div className={Bodyercss.fourth}>
                    <Link to='./goods4'>
                        <div className={Bodyercss.fourth1}>
                        <div className={Bodyercss.fourth11}>
                        <img src={timg3} alt="图片"/>
                        </div>
                        <div className={Bodyercss.fourth12}>
                        产品名称：象牙芒
                            <br></br>
                            <br></br>
                            价格：3元/斤    
                            <br></br>
                            <br></br>
                            产品介绍：攀枝花象牙芒果，果实圆长肥大，一个重1斤左右，因果型如幼年象牙而得名。
                            果实成熟时呈金黄色，可食部份占72%，皮薄核小，果肉肥厚、鲜嫩、多汁，味美可口，香甜如蜜。
                            富含维生素A、B、C，除供鲜食外,可做蜜饯、果酱、果脯等被视为果类珍品，誉为热"水果之王"。
                            
                        </div>
                    </div></Link>
                    
                </div>
                <div className={Bodyercss.fifth}>
                <Link to='/goods5'>
                        <div className={Bodyercss.fifth1}>
                        <div className={Bodyercss.fifth11}>
                            <img src={timg4} alt="图片"/>
                        </div>
                        <div className={Bodyercss.fifth12}>
                            产品名称：吉禄芒
                            <br></br>
                            <br></br>
                            原价：<del>6元/斤</del>
                            <br></br>
                            价格：4元/斤
                            <br></br>
                            <br></br>
                            产品介绍：攀枝花市海拔1400米以下属南亚热带气候，年均温19.5-21℃，发展中晚熟和晚熟芒果，
                            成熟期在7月下旬至9月下旬。由于本区冬春气温高，热量充足，有利于花期传粉座果；
                            而果实发育又与降雨期同步，病虫害少，果实着色好。果实宽卵形或长圆形而稍扁，平均单果重200-250 g或更大，
                            有明显的果咀。未熟果底色青绿，盖色紫红。 成熟后底色黄，盖色鲜红。果肉橙红色，肉质致密、腻滑，纤维极少。味甜芳香，品质较好。
                        </div>
                    </div>
                    </Link>
                    </div>
                    <div className={Bodyercss.sixth}>
                <Link to='/goods6'>
                        <div className={Bodyercss.sixth1}>
                        <div className={Bodyercss.sixth11}>
                            <img src={timg5} alt="图片"/>
                        </div>
                        <div className={Bodyercss.sixth12}>
                            产品名称：香芒
                            <br></br>
                            <br></br>
                            原价：<del>10元/斤</del>
                            <br></br>
                            价格：8元/斤
                            <br></br>
                            <br></br>
                            产品介绍：功效主治：
                            益胃止呕，解渴利尿。主治口渴咽干，食欲不振，消化不良，晕眩呕吐，咽痛音哑，咳嗽痰多，气喘等病症。
                            六年生树株产30~40公斤，每公顷12000~15000公斤，6月上旬至7月上旬果实成熟。
                            果呈椭圆形，果腹面有微腹沟，果脐不明显，皮薄光滑，淡绿色，后熟后转为鲜黄色，无胚果表皮粗糙。
                            果肉橙黄色，纤维级少而短，果汁多，肉质细嫩，香甜。正常果单果重200~300克，可食部分75%，可溶性固形物16~20%，
                            含糖量17%，淀粉12.4%，维生素C32~40mg/g。
                        </div>
                    </div>
                    </Link>
                    </div>

            </div>
            </div>
        )
    }

}