import React from 'react';
import HomeNav from "../components/home/HomeNav";
import HomePic from "../components/home/HomePic";
import Tool from "../components/home/tool";
import MyCarousel from "../components/home/Carousel";
// import Nav from "../components/Nav";

class Home extends React.Component {
    componentDidMount() {
        this.node.scrollIntoView();
    }

    render() {
        return (
            <div ref={node => this.node = node}>
                <HomeNav />
                <HomePic />
                <Tool />
                <MyCarousel />

            </div >
        )
    }
}

export default Home;