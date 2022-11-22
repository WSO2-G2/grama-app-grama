import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";

const Index = () => (
  <AuthProvider
      config={ {
          signInRedirectURL: "https://grama-app-grama.vercel.app/",
          signOutRedirectURL: "https://grama-app-grama.vercel.app/",
          clientID: "JPRovUcDTDjPogbC9seq2cIEzqoa",
          baseUrl: "https://api.asgardeo.io/t/wso2grama",
          scope: [ "openid","profile","email" ],
          resourceServerURLs: "https://7fa2c1a4-2bfc-4c58-899f-9569c112150b-dev.e1-us-east-azure.choreoapis.dev/ddrq/identitycheck/1.0.0"
      } }
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

render((<Index />), document.getElementById("root"));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
