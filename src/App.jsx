// src/App.jsx

import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import CalendlyBadge from "./components/CalendlyBadge";

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #f7fafc, #e3f2fd);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100%;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  color: #2c3e50;
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #34495e;
  max-width: 700px;
  font-size: 1.3rem;
  margin-bottom: 30px;
`;

const ProcessSteps = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 900px;
  width: 100%;
  margin-bottom: 40px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
`;

const StepIcon = styled.div`
  background: #3498db;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: white;
  font-size: 2rem;
`;

const StepTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const StepDescription = styled.p`
  color: #7f8c8d;
  font-size: 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Schedule Your Appointment</Header>
        <Description>
          Please select a date and time that works for you, and I will help you
          apply for the DV program.
        </Description>

        <ProcessSteps>
          <Step>
            <StepIcon>📅</StepIcon>
            <StepTitle>Step 1</StepTitle>
            <StepDescription>
              Book your application appointment.
            </StepDescription>
          </Step>
          <Step>
            <StepIcon>📸</StepIcon>
            <StepTitle>Step 2</StepTitle>
            <StepDescription>
              Take a passport photo at the studio.
            </StepDescription>
          </Step>
          <Step>
            <StepIcon>📄</StepIcon>
            <StepTitle>Step 3</StepTitle>
            <StepDescription>
              Upload info and attach passport photo at the{" "}
              <a href="https://dvprogram.state.gov/" target="_blank">
                official dv webiste.
              </a>{" "}
            </StepDescription>
          </Step>
        </ProcessSteps>

        <CalendlyBadge />
      </Container>
    </>
  );
}

export default App;
