import React from 'react';
import Home from "../pages/Home";
import Content from "../pages/Content";
import API from "../pages/API";
import Demo from "../pages/Demo";
import Fis2 from "../pages/Fis2";
import '../style/base.scss';
// import mystyle from '../style/base.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false,
            current: 'content',
        }
    }

    //控制导航透明度
    handleScroll = (event) => {
        let t = document.documentElement.scrollTop;
        if (t > 0) {
            this.setState({ showNav: true })
            console.log(this.state.showNav)
        } else {
            this.setState({ showNav: false })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        // const { current } = this.state;
        return (
            <Router >
                <div>
                    <div
                        className={`navbg ${this.state.showNav ? 'navbgshow' : ''}`}
                    >
                        <div className='navbox'>

                            <div id="logo">
                                <NavLink
                                    to="/home"
                                    key="home"
                                >
                                    <img src={require("../assets/icon/logo.png")} alt="logo" />
                                </NavLink>
                            </div>
                            <div id="navList">
                                <ul>
                                    <li>
                                        <NavLink
                                            className="navlink"
                                            activeClassName='active-menu'
                                            to="/home"
                                            key="main">
                                            首页
                                    </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="navlink"
                                            activeClassName='active-menu'
                                            key="content"
                                            to="/content"
                                        >用户文档
                                    </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="navlink"
                                            activeClassName='active-menu'
                                            key="demo"
                                            to="/demo"

                                        >
                                            DEMO
                                         </NavLink>
                                        <img src={require("../assets/icon/icon_export_white.png")} alt="logo" />
                                    </li>
                                    <li>
                                        <NavLink
                                            className="navlink"
                                            activeClassName='active-menu'
                                            key="api"
                                            to="/api">
                                            开发API
                                    </NavLink>
                                    </li>
                                    <li >
                                        <NavLink className="navlink"
                                            activeClassName='active-menu'
                                            key="fis"
                                            to="/fis">
                                            FIS2
                                    </NavLink>
                                        <img src={require("../assets/icon/icon_export_white.png")} alt="logo" />
                                    </li>
                                </ul>
                                <div id="githubLink">
                                    <img src={require("../assets/icon/icon_github.png")} alt="githubLink" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/home'>
                            <Home />
                        </Route>
                        <Route exact path='/content'>
                            <Content />
                        </Route>
                        <Route exact path='/api'>
                            <API />
                        </Route>
                        <Route exact path='/demo'>
                            <Demo />
                        </Route>
                        <Route exact path='/fis'>
                            <Fis2 />
                        </Route>
                    </Switch>

                </div>
            </Router >
        )
    }
}


export default Nav;
