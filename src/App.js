import React from 'react';

const IframeEmbed = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src="https://script.google.com/macros/s/AKfycbzAemJOiNBKrUDLHWWSRaU-wnMiFtGQcpWM0icdzIueG8KlJzwVQOevguJO44Nd_U4o_A/exec" // Replace with your Apps Script URL
        width="80%" // Adjust width as needed
        height="90%" // Adjust height as needed
        frameBorder="0" // Remove borders
        style={{ border: 'none', width: '100%', height: '100%' }} // Optional CSS styles
        title="Postpartum Depression Survey"
      />
    </div>
  );
};

export default IframeEmbed;
