    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
    //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCzO_dbvjfwWd3tlS6_CDk-a-1tfjMHQ3w",
      authDomain: "logibri-5bb3e.firebaseapp.com",
      projectId: "logibri-5bb3e",
      storageBucket: "logibri-5bb3e.appspot.com",
      messagingSenderId: "189140721047",
      appId: "1:189140721047:web:9e4f13993ae0afe66cb8d2",
      measurementId: "G-E9NTMWKF74"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   
    //const analytics = getAnalytics(app);