import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCzO_dbvjfwWd3tlS6_CDk-a-1tfjMHQ3w',
  authDomain: 'logibri-5bb3e.firebaseapp.com',
  projectId: 'logibri-5bb3e',
  storageBucket: 'logibri-5bb3e.appspot.com',
  messagingSenderId: '189140721047',
  appId: '1:189140721047:web:9e4f13993ae0afe66cb8d2',
  measurementId: 'G-E9NTMWKF74',
};

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
