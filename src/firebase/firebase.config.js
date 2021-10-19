console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  // apiKey: "AIzaSyCCVwxe-ekrUQxTyn7Ri_PEBTDBIfbY1Do",
  // authDomain: "doxwell-physiotheraphy.firebaseapp.com",
  // projectId: "doxwell-physiotheraphy",
  // storageBucket: "doxwell-physiotheraphy.appspot.com",
  // messagingSenderId: "22698185507",
  // appId: "1:22698185507:web:462087b030ac512d377296",
};

export default firebaseConfig;
