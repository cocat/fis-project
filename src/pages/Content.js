import React from 'react';
import Sidebar from '../components/Sidebar';
import Detail from "../components/content/detail"
import "../style/content.scss";


class Content extends React.Component {
    componentDidMount() {
        this.node.scrollIntoView();
    }

    render() {
        return (
            <div ref={node => this.node = node}>
                <div id="navBg"></div>
                <div className="nextbox"></div>
                <div className="mainbox">
                    <Sidebar />
                    <Detail />
                </div>
            </div >
        )
    }

}

export default Content;