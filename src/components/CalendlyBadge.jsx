import React, { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    // Dynamically inject the Calendly CSS and JS for the badge
    const scriptLink = document.createElement('link');
    scriptLink.href = 'https://assets.calendly.com/assets/external/widget.css';
    scriptLink.rel = 'stylesheet';
    document.head.appendChild(scriptLink);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      Calendly.initBadgeWidget({
        url: 'https://calendly.com/ianmarkarapkirui/dv-application',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: undefined,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div />; // Empty div for Calendly to render the badge in
};

export default CalendlyBadge;
