import React, { useState } from 'react';
import axios from 'axios';
import Output from './Component/output';
import "./App.css"
const App = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleConvert = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await axios.post('https://code-conerter.onrender.com/convert', {
        code,
        language,
      });
      console.log(response);
      setConvertedCode(response.data);
    } catch (error) {
      setError('Error occurred while converting the code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Code Converter</h1>
      <div className="app-container">
      <div className="input-section">
        <h2>Input Code</h2>
        <div>
          <label htmlFor="codeInput">Code:</label>
          <textarea
            id="codeInput"
            value={code}
            onChange={handleCodeChange}
            rows={10}
            cols={50}
            style={{overflow: "auto"}}
          ></textarea>
        </div>
        <div>
          <label htmlFor="languageSelect">Language:</label>
          <select
            id="languageSelect"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="">Select Language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="Typescript">Typescript</option>
            <option value="Ruby">Ruby</option>
          </select>
        </div>
        <button onClick={handleConvert} disabled={isLoading}>
          {isLoading ? 'Converting...' : 'Convert'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="output-section">
      <Output convertedCode={convertedCode} />
      </div>
      </div>
    </div>
  );
};

export default App;
