import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllEmployers from '../AllEmployers/AllEmployers';
import Banner from '../Banner/Banner';
import Poster from '../Poster/Poster';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Poster/>
            <AllEmployers/>
            <Footer/>
            
        </div>
    );
};

export default Home;