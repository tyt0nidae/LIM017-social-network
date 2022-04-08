//import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './config.js';



const provider = new GoogleAuthProvider();

const auth = getAuth(app);


export const  signInWithPopup(auth, provider)
  .then((result) => {
      console.log('Holi')
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
   // const token = credential.accessToken;
    // The signed-in user info.
    //const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    //const errorCode = error.code;
   // const errorMessage = error.message;
    // The email of the user's account used.
   // const email = error.email;
    // The AuthCredential type that was used.
   // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
