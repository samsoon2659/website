// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwdJR6n3kG9-Qur6bFryhkI7my17uoPf0",
  authDomain: "website-332910.firebaseapp.com",
  projectId: "website-332910",
  storageBucket: "website-332910.appspot.com",
  messagingSenderId: "154490563083",
  appId: "1:154490563083:web:3842bca2fe542abcdb350e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
var docRef = db.collection("manga").doc("bpWmPJwAlPNm9I4EhsWj");

docRef.get().then((doc) => {
    if (doc.exists) {
        document.write("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        document.write("No such document!");
    }
}).catch((error) => {
    document.write("Error getting document:", error);
});



document.write("hello");
