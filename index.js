import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { CourseContextProvider } from './Context/CourseContext';
import { HodAuthContextProvider } from './Context/HodAuthContext';
import { StaffAuthContextProvider } from './Context/StaffAuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CourseContextProvider>
        <HodAuthContextProvider>
          <StaffAuthContextProvider>
              <App />
          </StaffAuthContextProvider>
         </HodAuthContextProvider>
      </CourseContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
