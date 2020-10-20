import React from 'react';
import 'antd/lib/carousel/style';
import "../../style/home.scss"
import "antd/dist/antd.css"
import { Carousel } from 'antd';

import CarPage from "./Car_page";
import CarMid from "./Car_Mid.js";
import CarPrimary from "./Car_primary.js";
import CarFlow from "./Car_flow.js";


class MyCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dotPosition: 'bottom',
            slideIndex: 0,
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        // this.changeSlideIndex = this.changeSlideIndex.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.goToNum = this.goToNum.bind(this);
    }

    goToNum = (num) => {
        // console.log(num)
        this.slider && this.slider.innerSlider.slickGoTo(num);
    }

    next = () => {
        this.slider.slick.slickNext();
        // console.log(this.state.slideIndex);
    }
    prev = () => {
        this.slider.slick.slickPrev();
    };
    //轮播图位置
    handlePositionChange = (
        { target: { value: dotPosition } }) => this.setState({ dotPosition }
        );

    render() {
        //轮播图配置
        const lunboSetting = {
            dots: false,
            lazyLoad: true,
            autoplay: false,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => {
                this.setState({ slideIndex: next })
                console.log(this.state.slideIndex);
            }
        };

        return (
            <div className="Carousel">
                {/* 这个是走马灯上面的插画，hover变大 */}
                <div className="CarouseIllPic">
                    <h2>如何利用工具提升项目开发效率</h2>
                    <p>FIS3助您在各个阶段得心应手</p>
                    <div className="IllPic"
                    >
                        <div

                            onClick={this.goToNum.bind(this, 0)}
                            className={["IllPic1", this.state.slideIndex === 0 ? "activeIll" : "norIll"].join(' ')}
                        // onclick={goTo(0, dontAnimate)}
                        >
                            <img src={require("../../assets/other/IllusPic1_small@2x.png")} alt="IllusPic1_small" />
                            {/* <img src={require("../../assets/other/IllusPic1_big@2x.png")} alt="IllusPic1_small" /> */}
                            <h3>简单页面制作</h3>
                            <p>丰富的脚手架与组件仓库，自动监听、本地预览，让您的页面快速Run起来</p>
                        </div>
                        <div

                            onClick={this.goToNum.bind(this, 1)}

                            key="1" className={["IllPic2", this.state.slideIndex === 1 ? "activeIll" : "norIll"].join(' ')}>
                            <img src={require("../../assets/other/IllusPic2_small@2x.png")} alt="IllusPic1_small" />
                            {/* <img src={require("../../assets/other/IllusPic1_big@2x.png")} alt="IllusPic1_small" /> */}
                            <h3>初级项目研发</h3>
                            <p>工欲善其事，必先利其器。灵活运用开发工具提速开发</p>
                            {/* <img className={this.state.slideIndex === 1 ? "activeArrow" : "norArrow"} src={require("../../assets/icon/Triangle@2x.png")} alt="tran" /> */}
                        </div>



                        <div
                            onClick={this.goToNum.bind(this, 2)}
                            key="2" className={["IllPic3", this.state.slideIndex === 2 ? "activeIll" : "norIll"].join(' ')}>
                            <img src={require("../../assets/other/IllusPic3_small@2x.png")} alt="IllusPic1_small" />
                            {/* <img src={require("../../assets/other/IllusPic1_big@2x.png")} alt="IllusPic1_small" /> */}
                            <h3>中等规模项目</h3>
                            <p>利用模块化提升可维护性，灵活适配开发框架</p>
                        </div>
                        <div
                            onClick={this.goToNum.bind(this, 3)}
                            key="3" className={["IllPic4", this.state.slideIndex === 3 ? "activeIll" : "norIll"].join(' ')}>
                            <img src={require("../../assets/other/IllusPic4_small@2x.png")} alt="IllusPic1_small" />
                            {/* <img src={require("../../assets/other/IllusPic1_big@2x.png")} alt="IllusPic1_small" /> */}
                            <h3>大流量产品攻克</h3>
                            <p>全面管理整站静态资源，轻松搞定性能优化</p>
                        </div>
                    </div>
                </div>
                {/* 这个是走马灯本灯 */}
                <div className="Carouselbox">
                    {/* 看antd文档，文档的这个地方有错，是slider.innerSlider.slickGoTo();
                    https://react-slick.neostack.com/docs/example/slick-go-to
                    this.slider && this.slider.innerSlider.slickGoTo(); */}

                    <Carousel
                        {...lunboSetting}

                        ref={slider => this.slider = slider}
                    >
                        <div key={1} className="contentStyle" >
                            <CarPage />
                        </div>
                        <div key={2} className="contentStyle" >
                            <CarPrimary />
                        </div>
                        <div key={3} className="contentStyle" >
                            <CarMid />
                        </div>
                        <div key={4} className="contentStyle" >
                            <CarFlow />
                        </div>

                    </Carousel>
                    <div id="preArrow" onClick={this.prev} >
                        <img src={require("../../assets/icon/arr_left@2x.png")} alt="prePic" />
                    </div>
                    <div id="nextArrow" onClick={this.next} >
                        <img src={require("../../assets/icon/arr_right@2x.png")} alt="prePic" />
                    </div>
                </div>
            </div >
        )
    }
}

export default MyCarousel;