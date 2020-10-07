import React from 'react';
import "../../style/home.scss";


const CarMid = () => {
    return (
        <div className="CarMid">
            <div className="PrimaryPic">
                <img src={require("../../assets/other/Car_primary.png")} alt="Car_page" />
            </div>
            <div className="PrimaryContent">
                <div className="content para1">
                    <h4>模块化开发</h4>
                    <p>模块化是提升网站可维护性、功能复用性的重要手段，它能实现积木式的搭建网页。</p>
                    <p>FIS提供了ModJS模块化方案让用户无需关注模块化方案细节，只需像NodeJS一样简单的声明模块依赖便能轻松完成模块化工作，支持同步、异步的加载方式和依赖的管理。</p>
                </div>
                <div className="content para2">
                    <h4>无缝支持AMD/CMD等规范</h4>
                    <p>FIS同样支持开源的AMD/CMD等规范，通过自动化编译简化现有模块化方案的开发和依赖的分析管理等工作，让用户更专注于功能开发。</p>
                </div>
                <div className="content para3">
                    <h4>更简单的依赖打包机制</h4>
                    <p>FIS在分析过程中获取了整个项目模块化资源的依赖分析工作，使得诸如webpack的依赖打包和管理变得更加简单。</p>
                    <p>同样您可以自定义打包插件来自由扩展，例如Rosseta的打包</p>
                </div>
            </div>

        </div>
    )
}

export default CarMid;
