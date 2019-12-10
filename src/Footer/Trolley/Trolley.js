import React from 'react';
import { Icon } from 'antd';
var TrolleyCss = require('./Trolley.css');

export default class TrolleyPage extends React.Component {

    render() {
        return (
            <div>
                <div className={TrolleyCss.all}>
                    <div className={TrolleyCss.header}>
                        <div className={TrolleyCss.header1}>
                            购物车<Icon type="shopping-cart" style={{ fontSize: '30px' }} />
                        </div>
                        <div className={TrolleyCss.header2}>
                            管理<Icon type="edit" style={{ fontSize: '30px' }} />/删除<Icon type="delete" style={{ fontSize: '30px' }} />
                        </div>
                    </div>
                    <div className={TrolleyCss.bodyer}>
                        <div className={TrolleyCss.bodyer1}>
                            <div className={TrolleyCss.circle}>
                            </div>商品1
                        </div>
                        <div className={TrolleyCss.bodyer2}>
                            <div className={TrolleyCss.circle}>
                            </div>商品2
                        </div>
                        <div className={TrolleyCss.bodyer3}>
                            <div className={TrolleyCss.circle}>
                            </div>商品3
                        </div>
                    </div>
                    <div className={TrolleyCss.footer}>
                        <div className={TrolleyCss.footer1}></div>全选
                      <div className={TrolleyCss.footer2}>
                            立即购买<Icon type="paper-clip" style={{ fontSize: '30px' }} />
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}