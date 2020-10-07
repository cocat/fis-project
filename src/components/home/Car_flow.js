import React from 'react';
import "../../style/home.scss";

const CarFlow = () => {
    return (
        <div class="CarFlow">
            <div className="FlowPic">
                <img src={require("../../assets/other/Car_flow.png")} alt="Car_flow" />
            </div>
            <div className="FlowContent">
                <div className="content para1">
                    <h4>静态资源表机制</h4>
                    <p>作为FIS静态资源管理的核心，通过它不仅能灵活适配modjs/AMD/CMD等模块化方案，更能方便地扩展实现更多应用。了解更多</p>
                </div>
                <div className="content para2">
                    <h4>后端静态资源管理框架</h4>
                    <p>静态资源管理应当能适配php、java等各种后端方案，通过与后端的结合更好的实现网站资源的管理。了解更多</p>
                </div>
                <div className="content para3">
                    <h4>灵活控制资源加载</h4>
                    <p>按需加载、延迟加载、预加载等多种方式灵活控制，从性能优化角度出发优化首屏渲染等页面展现性能。</p>
                </div>

            </div>
        </div >
    )
}

export default CarFlow;
