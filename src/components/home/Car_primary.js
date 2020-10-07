import React from 'react';
import "../../style/home.scss";


const CarPrimary = () => {
    return (
        <div className="CarPrimary">


            <div className="PrimaryContent">

                <div className="content para1">
                    <h4>自动雪碧图</h4>
                    <p>雪碧图通过合并文件减少网络请求，提升页面加载性能。FIS能根据CSS中的文件引用自动生成雪碧图，有力提升css开发效率</p>
                </div>
                <div class="content para2">
                    <h4>资源内嵌，文件校验、压缩、合并</h4>
                    <p>内容嵌入可以为工程师提供诸如图片base64嵌入到css、js里，前端模板编译到js文件中，将js、css、html拆分成几个文件最后合并到一起的能力。通过简单的几行配置便能完成资源校验、压缩、合并工作</p>
                </div>

                <div className="content para3">
                    <div class="PrimaryPic">
                        <img src={require("../../assets/other/Car_Mid.png")} alt="PrimaryPic" />
                    </div>
                    <p> 更多开源编译工具应有尽有还不够？<span>快速封装一个</span></p>
                </div>
            </div>
        </div>

    )
}

export default CarPrimary;