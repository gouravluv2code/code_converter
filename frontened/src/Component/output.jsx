import React from 'react';

const Output = ({ convertedCode }) => {
  return (
    <div className="output-section">
      <h2>Output Code</h2>
      <pre>{convertedCode}</pre>
    </div>
  );
};

export default Output;