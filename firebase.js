// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// import 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCjMVzLiryaABg_Yc1Wco5cvrzp67DoUWw",
//   authDomain: "ranking-peluqueriapp.firebaseapp.com",
//   projectId: "ranking-peluqueriapp",
//   storageBucket: "ranking-peluqueriapp.appspot.com",
//   messagingSenderId: "850437328091",
//   appId: "1:850437328091:web:dcae914475c8405e60d0fe",
//   measurementId: "G-J543N4YJ60"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjMVzLiryaABg_Yc1Wco5cvrzp67DoUWw",
  authDomain: "ranking-peluqueriapp.firebaseapp.com",
  projectId: "ranking-peluqueriapp",
  storageBucket: "ranking-peluqueriapp.appspot.com",
  messagingSenderId: "850437328091",
  appId: "1:850437328091:web:dcae914475c8405e60d0fe",
  measurementId: "G-J543N4YJ60"
};

let app = null;

export const initializeFirebase = () => {
  if (typeof window !== 'undefined' && !app) {
    // Verificar si `app` aún no está inicializado para evitar inicializarlo varias veces
    initializeApp(firebaseConfig);
  }
};
