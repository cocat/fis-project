import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footerBox">
                    <div className="footerPic">
                        <img src={require("../assets/other/logo_footer.png")} alt="logo" />
                    </div>
                    <div className="footerBg">
                        <img src={require("../assets/other/footerPic.png")} alt="footerPic." />
                    </div>
                    <div className="para1">
                        <h5>我们的项目</h5>
                        <h5>友情链接</h5>
                        <h5>联系我们</h5>
                    </div>
                    <div className="para2">
                        <p>FIS-Plus</p>
                        <p>FEX</p>
                        <div className="contact">
                            <p>Blog</p>
                            <p>微博</p>
                            <p>Twitter</p>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
                <div className="CopyRight">
                    <p>� FIS-team Copyright © 2015.FE@Baidu</p>
                </div>

            </div >
        )
    }

}