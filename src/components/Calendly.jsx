// src/Calendly.jsx

import React from 'react';
import styled from 'styled-components';

const CalendlyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Calendly = () => {
  return (
    <CalendlyContainer>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/your_calendly_link"
        style={{ minWidth: '320px', height: '630px' }}
      />
      <script src="https://assets.calendly.com/asset/calendly-2.0.0.js" async></script>
    </CalendlyContainer>
  );
};
