import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from "./global-styles"
import { App } from './app';
import { FirebaseContext } from "./context/firebase"

const config = {
    apiKey: "AIzaSyDentHzI5f5z66dTlTdHIrvf7w0GDXUfOE",
    authDomain: "react-netflix-clone-scrimba.firebaseapp.com",
    projectId: "react-netflix-clone-scrimba",
    storageBucket: "react-netflix-clone-scrimba.appspot.com",
    messagingSenderId: "157944230706",
    appId: "1:157944230706:web:73f6faeca21304b22add2b"
}

// Here we inject Firebase into the window
const firebase = window.firebase.initializeApp(config)

// And we use Context API to use Firebase!
ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, document.getElementById('root'));
