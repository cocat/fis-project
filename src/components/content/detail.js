import React from 'react';


export default class Detail extends React.Component {

    render() {
        return (
            <div className="DetailBox">
                <div className="blockAll" title="构建">
                    <h1 className="title1">构建</h1>
                    <p className="info">由 fis3-command-release 插件提供构建能力</p>
                    <p className="nor_font">FIS3 的构建不会修改源码，而是会通过用户设置，将构建结果输出到指定的目录。</p>
                </div>

                <div className="block" title="例子">
                    <h1 className="title2">例子</h1>
                    <div className="nor_font">在正式介绍 FIS3 功能之前，我们给定一个简单的例子，例子下载地址
                    <div className="blue_link">
                            <span className="blue_font">demo-simple</span>
                            <img src={require("../../assets/icon/icon_export_blue.png")} alt="" />
                        </div>
                    </div>
                </div>

                <div className="block" title="命令">
                    <h1 className="title2">命令</h1>
                    <p className="nor_font">进入<strong>项目根目录</strong>，执行命令，进行构建。</p>
                    <div className="info_yellow">
                        <p>项目根目录：FIS3 配置文件（默认fis-conf.js）所在的目录为项目根目录。</p>
                    </div>
                    <div className="code_black">
                        <p>fis3 release -d&nbsp;&lt; path &gt; </p>
                    </div>
                    <ul>
                        <li>
                            <span className="code_grey"> &nbsp;&lt; path&gt; </span>
                            任意目录
                        </li>
                        <li>
                            <span className="code_grey">fis3 release -h</span>
                            任意目录
                        </li>
                    </ul>
                    <p className="nor_font">
                        <b>构建发布到项目目录的</b>
                        <span className="code_grey"> output </span>
                        <b>目录下</b>
                    </p>

                    <div className="code_black">
                        <p>fis3 release -d ./output</p>
                    </div>
                    <p className="nor_font">
                        <b>构建发布到项目父级目录的</b>
                        <span className="code_grey"> dist </span>
                        <b>子目录下</b>
                    </p>

                    <div className="code_black">
                        <p>fis3 release -d ../dist</p>
                    </div>

                    <p className="nor_font">
                        <b>发布到其他盘 （Windows）</b>
                    </p>
                    <div className="code_black">
                        <p>fis3 release -d D:\output</p>
                    </div>
                </div>

                <div className="block" title="资源定位">
                    <h1 className="title2">资源定位</h1>
                    <p className="nor_font">
                        我们在项目根目录执行命令 fis3 release -d ../output 发布到目录 ../output 下。然后通过 diff 工具查看源码和构建结果的内容变化。
                    </p>
                    <div className="fileFont">
                        <img className="fileIcon" src={require("../../assets/icon/icon_file.png")} alt="" />
                        <p className="picTitle">文件变化</p>
                        <div className="filePic">
                            <img src={require("../../assets/other/pic_index.png")} alt="" />
                        </div>
                    </div>
                    <div className="fileFont">
                        <img className="fileIcon" src={require("../../assets/icon/icon_file.png")} alt="" />
                        <p className="picTitle">index.html</p>
                        <div className="filePic">
                            <img src={require("../../assets/other/pic_file.png")} alt="" />
                        </div>
                    </div>
                    <ul>
                        <li>
                            <span className="code_grey"> index.html、style.css </span>
                            发生了变化
                        </li>
                    </ul>
                    {/* <div className="nor_font para">
                        <p>如上，构建过程中对资源 URI 进行了替换，替换成了绝对 URL。通俗点讲就是相对路径换成了绝对路径。</p>
                        <p>这是一个 FIS 的很重要的特性，<span className="link_blue">资源定位</span>。</p>
                        <p>资源定位能力，可以有效地分离开发路径与部署路径之间的关系，工程师不再关心资源部署到线上之后去了哪里，变成了什么名字，这些都可以通过配置来指定。而工程师只需要使用相对路径来定位自己的开发资源即可。这样的好处是 资源可以发布到任何静态资源服务器的任何路径上，而不用担心线上运行时找不到它们，而且代码 具有很强的可移植性，甚至可以从一个产品线移植到另一个产品线而不用担心线上部署不一致的问题。</p>
                        <p>在默认不配置的情况下只是对资源相对路径修改成了绝对路径。通过配置文件可以轻松分离开发路径（源码路径）与部署路径。比如我们想让所有的静态资源构建后到 static 目录下。
                        如上，构建过程中对资源 URI 进行了替换，替换成了绝对 URL。通俗点讲就是相对路径换成了绝对路径。</p>
                    </div> */}
                </div >
            </div>
        )
    }
}