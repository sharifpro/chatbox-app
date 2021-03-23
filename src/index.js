import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAUyOoUwsAv0fh3bJItgJNApNGQ5ZjDC1E",
  authDomain: "chatbox-app-c6d25.firebaseapp.com",
  projectId: "chatbox-app-c6d25",
  storageBucket: "chatbox-app-c6d25.appspot.com",
  messagingSenderId: "240938263790",
  appId: "1:240938263790:web:b1d603534f47887a547fff",
  measurementId: "G-5563HJFXQD"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

