import React from 'react';

import "../../style/base.scss";

class HomeNav extends React.Component {
    render() {
        return (
            <div>
                <div className="homeNavpic">
                    <div className="mainbox">
                        <h2>FIS3 , 为你定制的前端工程构建工具</h2>
                        <p>解决前端开发中自动化工具、性能优化、模块化框架、开发规范、代码部署、开发流程等问题</p>
                        <div>
                            <button className="btnContent">
                                快速开始
                            </button>
                        </div>
                    </div>

                </div>
            </div >
        )

    }

}
export default HomeNav;