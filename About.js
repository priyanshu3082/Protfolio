import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
`;

const AboutText = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const AboutImage = styled.img`
  width: 50%;
  border-radius: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutText>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
          odio ut mi ultrices bibendum nec quis nunc. Duis eu turpis lacus. Sed
          tincidunt dui vitae tristique elementum. Nulla facilisi. Fusce eget
          mauris sem. Suspendisse non tellus ac felis aliquet ultrices.
        </p>
      </AboutText>
      <AboutImage
        src="https://images.unsplash.com/photo-1626147399098-e5d5fb5f5bb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Profile"
      />
    </AboutContainer>
  );
};

export default About;
