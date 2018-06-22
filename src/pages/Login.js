import React, { Component } from 'react';
import logo from '../logo.svg';

var firebase = require('firebase');
var firebaseui = require('firebaseui');

let config = {
  apiKey: 'AIzaSyAtF0GL1ZRYPBPLDWuAyZP5caG7uETzImA',
  authDomain: 'dohive-6efec.firebaseapp.com',
  databaseURL: 'https://dohive-6efec.firebaseio.com',
  projectId: 'dohive-6efec',
  storageBucket: '',
  messagingSenderId: '992984178231'
};

firebase.initializeApp(config);

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/activity',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container" />
        <div id="loader">Loading...</div>
      </div>
    );
  }
}

export default App;
