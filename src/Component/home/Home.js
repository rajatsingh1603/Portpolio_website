import React from 'react';
import "../home/style.css";
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer';
function Home() {
    return (<div className='home'>
        <Header />
        <Content />
        <Footer />
    </div>)
}

export default Home;
