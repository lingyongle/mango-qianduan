import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './Login/login';
import RegisterRage from './Login/Registe/registe';
import LsccussPage from './Login/Lsccuss/lsccuss';
import RsccussPage from './Login/Registe/Rsccuss/rsccuss';
import Fpasssword from './Login/FPassword/fpassword';
import Goods1Page from './Bodyer/Goods1/goods1';
import Goods2Page from './Bodyer/Goods2/goods2';
import Goods3Page from './Bodyer/Goods3/goods3';
import Goods4Page from './Bodyer/Goods4/goods4';
import Goods5Page from './Bodyer/Goods5/goods5';
import Goods6Page from './Bodyer/Goods6/goods6';
import MyPage from './Footer/My/My';
import IntroducePage from './Footer/Introduce/Introduce';
import TrolleyPage from './Footer/Trolley/Trolley';
import FaHuoPage from './Footer/FaHuo/FaHuo';
import WuLiuPage from './Footer/WuLiu/WuLiu';
import SetPage from './Footer/Set/Set';
import ConnectPage from './Footer/Connect/Connect';
import EndPage from './Footer/End/End';
import FPasswordPage from './Login/FPassword/fpassword';
import PurchasePage from './Bodyer/Purchase/purchase';

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter basename='react-example'>
                    <Switch>
                        <Route path="/" exact component={HomePage}></Route>
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/login" component={LoginPage}></Route>
                        <Route path="/goods1" component={Goods1Page}></Route>
                        <Route path="/goods2" component={Goods2Page}></Route>
                        <Route path="/goods3" component={Goods3Page}></Route>
                        <Route path="/goods4" component={Goods4Page}></Route>
                        <Route path="/goods5" component={Goods5Page}></Route>
                        <Route path="/goods6" component={Goods6Page}></Route>
                        <Route path="/My" component={MyPage}></Route>
                        <Route path="/Introduce" component={IntroducePage}></Route>
                        <Route path="/Trolley" component={TrolleyPage}></Route>
                        <Route path="/FaHuo" component={FaHuoPage}></Route>
                        <Route path="/WuLiu" component={WuLiuPage}></Route>
                        <Route path="/Set" component={SetPage}></Route>
                        <Route path="/Connect" component={ConnectPage}></Route>
                        <Route path="/End" component={EndPage}></Route>
                        <Route path='/registe' component={RegisterRage}></Route>
                        <Route path='/Lsccuss' component={LsccussPage}></Route>
                        <Route path='/rsccuss' component={RsccussPage}></Route>
                        <Route path='/Fpassword' component={FPasswordPage}></Route>
                        <Route path='/Purchase' component={PurchasePage}></Route>
                        

                        <Redirect to="/login"></Redirect> 


                    </Switch>

                </BrowserRouter>
            </div>
        )
    }
}
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
