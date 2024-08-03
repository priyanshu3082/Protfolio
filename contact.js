import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  input,
  textarea {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: none;
  }

  input {
    height: 2.5rem;
  }

  textarea {
    height: 10rem;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 0.8rem 2.5rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 2rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0062cc;
    }
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  padding-left: 5rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactForm>
        <h2>Contact Me</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </ContactForm>
      <ContactInfo>
        <h3>Get in touch</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
          odio ut mi ultrices bibendum nec quis nunc.
        </p>
        <p>
        <strong>Phone:</strong> +1 234 567890<br />
        <strong>Email:</strong> example@example.com
         </p>
        <br />
        <br />
        <strong>Address:</strong> 1234 Example St, New York, NY 10001
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;