import React from 'react';
import "antd/dist/antd.css"
import { Menu } from 'antd';
import "../style/content.scss"

const { SubMenu } = Menu;

class Siderbar extends React.Component {
    // componentWillMount() {
    //     this.setState({
    //         list: ['thing1', 'thing2', 'thing3'],
    //         newTodo: 'test'
    //     })

    handleClick = e => {
        console.log('click ', e);
    };

    // class="ant-menu-submenu-title"
    // ant-menu-submenu ant-menu-submenu-inline subMenu ant-menu-submenu-open ant-menu-submenu-selected

    render() {
        return (
            <Menu
                className="sideFlow"
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['subs1_1']}
                defaultOpenKeys={['sub1', 'sub2', 'sub3', 'subs1']}
                mode="inline"
            >
                <Menu.Item key="sub1" className="mainMenu">
                    介绍
                 </Menu.Item>
                <Menu.Item key="sub2" className="mainMenu">
                    安装
                 </Menu.Item>
                <Menu.Item key="sub3" className="mainMenu">
                    起步
                 </Menu.Item>
                <SubMenu key="subs1" title="构建" className="subMenu">
                    <Menu.Item key="subs1_1" className="subMenuItem">例子</Menu.Item>
                    <Menu.Item key="subs1_2" className="subMenuItem">命令</Menu.Item>
                    <Menu.Item key="subs1_3" className="subMenuItem">资源定位</Menu.Item>
                    <Menu.Item key="subs1_4" className="subMenuItem">配置文件</Menu.Item>
                    <Menu.Item key="subs1_5" className="subMenuItem">文件指纹</Menu.Item>
                    <Menu.Item key="subs1_6" className="subMenuItem">压缩资源</Menu.Item>
                    <Menu.Item key="subs1_7" className="subMenuItem">CssSprite图片合并</Menu.Item>
                    <Menu.Item key="subs1_8" className="subMenuItem">功能组合</Menu.Item>
                </SubMenu>
                <SubMenu key="subs2" title="调试">
                    <Menu.Item key="subs2_1" className="subMenuItem">目录</Menu.Item>
                    <Menu.Item key="subs2_2" className="subMenuItem">发布</Menu.Item>
                    <Menu.Item key="subs2_3" className="subMenuItem">启动</Menu.Item>
                    <Menu.Item key="subs2_4" className="subMenuItem">预览</Menu.Item>
                    <Menu.Item key="subs2_5" className="subMenuItem">文件监听</Menu.Item>
                    <Menu.Item key="subs2_6" className="subMenuItem">浏览器自动刷新</Menu.Item>
                    <Menu.Item key="subs2_7" className="subMenuItem">发布到远端机器</Menu.Item>
                    <Menu.Item key="subs2_8" className="subMenuItem">替代内置Server</Menu.Item>
                </SubMenu>
                <SubMenu key="subs3" title="内置语法">
                    <Menu.Item key="subs3_1" className="subMenuItem">内容嵌入</Menu.Item>
                    <Menu.Item key="subs3_2" className="subMenuItem">定位资源</Menu.Item>
                    <Menu.Item key="subs3_3" className="subMenuItem">声明依赖</Menu.Item>
                </SubMenu>

                {/* 只有二级导航 */}
                <Menu.Item key="sub4" className="mainMenu" >工作原理</Menu.Item>
                <SubMenu key="subs4" title="构建流程" className="ArrowDisapper" ></SubMenu>
                <SubMenu key="subs5" title="单文件编译流程" className="ArrowDisapper"></SubMenu>
                <SubMenu key="subs6" title="构建流程" className="ArrowDisapper" ></SubMenu>

                {/* 只有二级导航 */}
                <Menu.Item key="sub5" className="mainMenu" >工作原理</Menu.Item>
                <SubMenu key="subs5-4" title="构建流程" className="ArrowDisapper" ></SubMenu>
                <SubMenu key="subs5-5" title="单文件编译流程" className="ArrowDisapper"></SubMenu>
                <SubMenu key="subs5-6" title="构建流程" className="ArrowDisapper" ></SubMenu>
                {/* 只有二级导航 */}
                <Menu.Item key="sub6" className="mainMenu" >工作原理</Menu.Item>
                <SubMenu key="subs6-4" title="构建流程" className="ArrowDisapper" ></SubMenu>
                <SubMenu key="subs6-5" title="单文件编译流程" className="ArrowDisapper"></SubMenu>
                <SubMenu key="subs6-6" title="构建流程" className="ArrowDisapper" ></SubMenu>
                {/* 只有二级导航 */}
                <Menu.Item key="sub7" className="mainMenu" >工作原理</Menu.Item>
                <SubMenu key="subs7-4" title="构建流程" className="ArrowDisapper" ></SubMenu>
                <SubMenu key="subs7-5" title="单文件编译流程" className="ArrowDisapper"></SubMenu>
                <SubMenu key="subs7-6" title="构建流程" className="ArrowDisapper" ></SubMenu>
                {/* 只有二级导航 */}
                <Menu.Item key="sub8" className="mainMenu" >工作原理</Menu.Item>
                <SubMenu key="subs8-4" title="构建流程" className="ArrowDisapper" ></SubMenu>
                <SubMenu key="subs8-5" title="单文件编译流程" className="ArrowDisapper"></SubMenu>
                <SubMenu key="subs8-6" title="构建流程" className="ArrowDisapper" ></SubMenu>
            </Menu >

        )
    }
}

export default Siderbar;