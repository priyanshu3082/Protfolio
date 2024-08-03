import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
