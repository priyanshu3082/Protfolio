import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from './SectionTitle';
import { servicesData } from '../data/ServicesData';
import { Button } from './Button';

const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #000;
`;

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ServiceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <SectionTitle>Services</SectionTitle>
      <ServicesWrapper>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon src={service.icon} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <Button to="/contact">{service.buttonText}</Button>
          </ServiceCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
