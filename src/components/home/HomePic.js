import React from 'react';
import "../../style/home.scss";


const HomePic = () => {
    return (
        <div className="homePic">
            <div className="picbox">
                <div className="pic left">
                    <img src={require('../../assets/other/pic_project@2x.png')} alt="project" />
                    <div>
                        <h2>60+</h2>
                        <p>百度产品线/项目</p>
                    </div>
                </div>
                <div className="pic middle">
                    <img src={require('../../assets/other/pic_company@2x.png')} alt="project" />
                    <div>
                        <h2>30+</h2>
                        <p>外部公司</p>
                    </div>
                </div>
                <div className="pic right">
                    <img src={require('../../assets/other/pic_npm@2x.png')} alt="project" />
                    <div>
                        <h2>440+</h2>
                        <p>NPM包</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePic;