import React from 'react';
import { Menu } from 'antd';
// import 'antd/dist/antd.less';
// import "antd/dist/antd.css"
// import 'antd/lib/menu/style';
import "../../style/base.scss";



class Tool extends React.Component {
    state = {
        current: 'css',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div className="toolComponent">
                <h1>岂止于工具</h1>
                <p>FIS3与一般构建工具有何不同</p>

                <div id="toolMenu">
                    <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[current]}
                    >
                        <Menu.Item key="css" className={current === "css" ? "menuActive" : "menuClose"} >
                            类CSS配置
                     </Menu.Item>
                        <Menu.Item key="glob" className={current === "glob" ? "menuActive" : "menuClose"} >
                            Glob扩展
                    </Menu.Item>
                        <Menu.Item key="menu" className={current === "menu" ? "menuActive" : "menuClose"} >
                            目录定制
                    </Menu.Item>
                        <Menu.Item key="depe" className={current === "depe" ? "menuActive" : "menuClose"} >
                            依赖分析
                </Menu.Item>
                        <Menu.Item key="static" className={current === "static" ? "menuActive" : "menuClose"} >
                            静态资源表
                </Menu.Item>
                        <Menu.Item key="back" className={current === "back" ? "menuActive" : "menuClose"} >
                            后端结合
                </Menu.Item>
                    </Menu>
                </div>
                <div id="content">

                    <div style={{ display: (current === "css") ? "block" : "none" }}>
                        <img src={require("../../assets/other/css.png")} alt="csspic" />
                        <h2>强大的静态资源管理</h2>
                        <p>FIS3绝不仅是Task管理工具，其核心思想在于整站强大的静态资源管理能力。无论是按需加载、组件内嵌、BigRender、Quickling等方案都能快速实施。</p>
                        <div id="linkicon">
                            <p>查看更多</p>
                            <img src={require("../../assets/icon/icon_select_green.png")} alt="link" />
                        </div>
                    </div>
                    <div style={{ display: (current === "glob") ? "block" : "none" }}>
                        <img src={require("../../assets/other/glob.png")} alt="globpic" />
                        <h2>Glob语法扩展</h2>
                        <p>不会写正则？不用怕，FIS3不仅提供了友好易用的Glob匹配语法，更扩展了分组功能，再没有更简单易用的文件匹配了。</p>
                        <div id="linkicon">
                            <p>查看更多</p>
                            <img src={require("../../assets/icon/icon_select_green.png")} alt="link" />
                        </div>
                    </div>
                    <div style={{ display: (current === "menu") ? "block" : "none" }}>
                        <img src={require("../../assets/other/menu.png")} alt="menupic" />
                        <h2>面向开发的目录规范</h2>
                        <p>FIS3强大的资源定位和内嵌等能力让你能真正面向开发定义利于维护的目录规范，同时能适配任意服务器的发布需求。一份代码，多种发布。迁移变得如此简单！</p>
                        <div id="linkicon">
                            <p>查看更多</p>
                            <img src={require("../../assets/icon/icon_select_green.png")} alt="link" />
                        </div>
                    </div>
                    <div style={{ display: (current === "depe") ? "block" : "none" }}>
                        <img src={require("../../assets/other/depend.png")} alt="dependencepic" />
                        <h2>自动依赖分析</h2>
                        <p>FIS3通过依赖声明自动分析资源依赖，支持适配CommonJS/AMD/CMD等多种模块化规范;类似WebPack依赖打包变得更加简单。</p>
                        <div id="linkicon">
                            <p>查看更多</p>
                            <img src={require("../../assets/icon/icon_select_green.png")} alt="link" />
                        </div>
                    </div>
                    <div style={{ display: (current === "static") ? "block" : "none" }}>
                        <img src={require("../../assets/other/static.png")} alt="staticpic" />
                        <h2>强大的静态资源管理</h2>
                        <p>FIS3绝不仅是Task管理工具，其核心思想在于整站强大的静态资源管理能力。无论是按需加载、组件内嵌、BigRender、Quickling等方案都能快速实施。</p>
                        <div id="linkicon">
                            <p>查看更多</p>
                            <img src={require("../../assets/icon/icon_select_green.png")} alt="link" />
                        </div>
                    </div>
                    <div style={{ display: (current === "back") ? "block" : "none" }}>
                        <img src={require("../../assets/other/back.png")} alt="backpic" />
                        <h2>与后端框架的无缝结合</h2>
                        <p>FIS3将静态资源管理能力延伸到后端框架，无论是PHP的、smarty，Nodejs，还是JAVA的velocity，都有相应的解决方案支持。</p>
                        <div id="linkicon">
                            <p>查看更多</p>
                            <img src={require("../../assets/icon/icon_select_green.png")} alt="link" />
                        </div>
                    </div>

                </div>


            </div >
        );
    }
}

export default Tool;