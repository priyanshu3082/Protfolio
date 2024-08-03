import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const Logo = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 2rem;

    a {
      color: #333;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px;
    transition: all 0.3s ease;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <h1>My Portfolio</h1>
      </Logo>
      <NavLinks>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </NavLinks>
      <Burger>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Burger>
    </NavContainer>
  );
};

export default Navbar;
