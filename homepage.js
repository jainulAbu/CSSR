import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0uJiYfpvcIC8J66LoJACA-18RDRY2Cjo",
    authDomain: "login-form-8687d.firebaseapp.com",
    projectId: "login-form-8687d",
    storageBucket: "login-form-8687d.appspot.com",
    messagingSenderId: "980543945420",
    appId: "1:980543945420:web:b75ac219d40299a617a069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Redirect to Human.html on Button Click
const humanDetectionButton = document.getElementById('humanDetection');
humanDetectionButton.addEventListener('click', () => {
    window.location.href = 'Human.html'; // Navigate to Human.html
});

// Logout functionality (optional if required)
const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserId');
        signOut(auth)
            .then(() => {
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Error Signing out:', error);
            });
    });
}
