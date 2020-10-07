import React from 'react';
import "../../style/home.scss";


const CarPage = () => {
    return (
        <div className="Carpage">
            <div className="pagePic">
                <img src={require("../../assets/other/Car_page.png")} alt="Car_page" />
            </div>

            <h2>简单页面制作</h2>
            <h3>丰富的脚手架与组件仓库，自动监听、本地预览，让您的页面快速Run起来</h3>
            <div className="pageContent">
                <p>丰富的脚手架和组件仓库，让您快速上手</p>
                <p>提供本地调试服务器，方便快速预览、本地数据模拟等功能。支持文件监听、自动刷新，您的每次改动都能快速呈现在页面中</p>
                <p>方便的资源定位机制、css语法般的目录和发布配置，让您保持高可维护性的开发目录结构不变同时，轻松适配任意服务器部署的目录要求</p>
            </div>

        </div>
    )
}

export default CarPage;
