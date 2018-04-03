import React from 'react';
import * as firebase from 'firebase';

<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>

// Initialize Firebase

const config = {
    apiKey: "AIzaSyCtAxopbD91W1jryKS2UsKHbJ2Opj1LFqI",
    authDomain: "react-auth-7f06e.firebaseapp.com",
    databaseURL: "https://react-auth-7f06e.firebaseio.com",
    projectId: "react-auth-7f06e",
    storageBucket: "",
    messagingSenderId: "305642152901"
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth
};