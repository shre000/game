import React from 'react'
import Topbar from './Topbar';
import Corousel from './Corousel';
import Cards from './Cards';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Topbar/>
      <Corousel/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home;
