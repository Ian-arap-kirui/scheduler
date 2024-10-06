// src/App.jsx

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CalendlyBadge from './components/CalendlyBadge';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #f0f4f8 30%, #e3f2fd 100%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #34495e;
  max-width: 600px;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const ScheduleButton = styled.button`
  padding: 15px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 30px;
  background: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(0, 123, 255, 0.3);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Schedule Your Appointment</Header>
        <Description>
          Please select a date and time that works for you and I will help you to apply for the DV program.
        </Description>
        <CalendlyBadge />
        {/* <ScheduleButton>Open Calendar</ScheduleButton> */}
      </Container>
    </>
  );
}

export default App;
