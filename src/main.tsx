import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StyledThemeProvider } from './lib/styled-ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledThemeProvider>
      <App />
    </StyledThemeProvider>
  </React.StrictMode>,
);
