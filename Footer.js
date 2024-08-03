import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 2rem 10rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  i {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo href="#">Portfolio</Logo>
      <SocialIcons>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
