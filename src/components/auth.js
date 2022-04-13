import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

//import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

import { app } from "./confi.js"




const auth = getAuth(app);

export const registerWithEmailAndPassword = (email, password) =>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

   //const user = userCredential.user;
    // ...

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

const user = auth.currentUser;
export const GetDataUser = (displayName,email) =>{
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
}


/*onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});*/




/*signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/









