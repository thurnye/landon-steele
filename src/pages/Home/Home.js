import React from 'react';
import styles from './Home.module.css';
import Container from '@mui/material/Container';
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Contact from '../../components/Contact/Contact'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Testimonals from '../../components/Testimonals/Testimonals'

const Home = () => (
  <div className={styles.Home}>
    <Container maxWidth={'lg'}>
      <Jumbotron/>
      <div id="#services">
        <Services/>
        <Testimonals/>
      </div>
      <div id="#about">
        <About/>
      </div>
      <div id="#contact">
        <Contact/>
      </div>
    </Container>
  </div>
);


export default Home;
