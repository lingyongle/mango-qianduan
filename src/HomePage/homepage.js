import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import Bodyer from './../Bodyer/bodyer';
import { Button, Icon } from 'antd'
import { BrowserRouter, Route, Link } from "react-router-dom"
var HomePageCss = require ('../HomePage/homepage.css')

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Bodyer />
                <Footer />

            </div>
        )
    }
}