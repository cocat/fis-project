import React from 'react';
import 'antd/lib/carousel/style';
import "../../style/home.scss"
import "antd/dist/antd.css"
import { Carousel } from 'antd';

import CarPage from "./Car_page";
import CarPrimary from "./Car_primary";



class MyCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dotPosition: 'bottom',
            current: '1',
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
    }

    next() {
        this.slider.slick.slickNext();
    };
    prev() {
        this.slider.slick.slickPrev();
    };
    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

    render() {
        const lunboSetting = {
            dots: true,
            lazyLoad: true,
            autoplay: true,
        };

        const { current } = this.state;

        return (
            <div className="Carousel">
                <div class="Carouselbox">
                    <Carousel
                        {...lunboSetting}
                        ref={el => (this.slider = el)}>
                        <div key={1} className="contentStyle" >
                            <CarPage />
                        </div>
                        <div key={2} className="contentStyle" >
                            <CarPrimary />
                        </div>
                        {/* <div key={3} className="contentStyle" ><h3>3</h3></div>
                    <div key={4} className="contentStyle" ><h3>4</h3></div> */}

                    </Carousel>
                    <div id="preArrow" onClick={this.prev} >
                        <img src={require("../../assets/icon/arr_left@2x.png")} alt="prePic" />
                    </div>
                    <div id="nextArrow" onClick={this.next} >
                        <img src={require("../../assets/icon/arr_right@2x.png")} alt="prePic" />
                    </div>
                </div>
            </div>
        )
    }
}


<SubMenu key="sub3" title="起步">
    {/* <Menu.Item key="5">构建</Menu.Item> */}
    <SubMenu key="subs1" title="构建">
        <Menu.Item key="subs1_1">例子</Menu.Item>
        <Menu.Item key="subs1_2">命令</Menu.Item>
        <Menu.Item key="subs1_3">资源定位</Menu.Item>
        <Menu.Item key="subs1_4">配置文件</Menu.Item>
        <Menu.Item key="subs1_5">文件指纹</Menu.Item>
        <Menu.Item key="subs1_6">压缩资源</Menu.Item>
        <Menu.Item key="subs1_7">CssSprite图片合并</Menu.Item>
        <Menu.Item key="subs1_8">功能组合</Menu.Item>
    </SubMenu>
    <SubMenu key="subs2" title="调试">
        <Menu.Item key="subs2_1">目录</Menu.Item>
        <Menu.Item key="subs2_2">发布</Menu.Item>
        <Menu.Item key="subs2_3">启动</Menu.Item>
        <Menu.Item key="subs2_4">预览</Menu.Item>
        <Menu.Item key="subs2_5">文件监听</Menu.Item>
        <Menu.Item key="subs2_6">浏览器自动刷新</Menu.Item>
        <Menu.Item key="subs2_7">发布到远端机器</Menu.Item>
        <Menu.Item key="subs2_8">替代内置Server</Menu.Item>
    </SubMenu>
    <SubMenu key="subs2" title="调试">
        <Menu.Item key="subs2_1">目录</Menu.Item>
        <Menu.Item key="subs2_2">发布</Menu.Item>
        <Menu.Item key="subs2_3">启动</Menu.Item>
        <Menu.Item key="subs2_4">预览</Menu.Item>
        <Menu.Item key="subs2_5">文件监听</Menu.Item>
        <Menu.Item key="subs2_6">浏览器自动刷新</Menu.Item>
        <Menu.Item key="subs2_7">发布到远端机器</Menu.Item>
        <Menu.Item key="subs2_8">替代内置Server</Menu.Item>
    </SubMenu>
</SubMenu>
export default MyCarousel;