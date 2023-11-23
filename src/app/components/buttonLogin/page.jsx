"use client"
import { Button } from "@nextui-org/button";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function BtnLogin() {

    const provider = new GoogleAuthProvider();
    const firebaseConfig = {
        apiKey: "AIzaSyCjMVzLiryaABg_Yc1Wco5cvrzp67DoUWw",
        authDomain: "ranking-peluqueriapp.firebaseapp.com",
        projectId: "ranking-peluqueriapp",
        storageBucket: "ranking-peluqueriapp.appspot.com",
        messagingSenderId: "850437328091",
        appId: "1:850437328091:web:dcae914475c8405e60d0fe",
        measurementId: "G-J543N4YJ60"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    const handleLogin = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                alert(result.user.displayName)
                // IdP data available using getAdditionalUserInfo(result)
                // Redirigir a la página principal
                
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    };

    return (
        <Button className="btnLogin" variant="shadow" onClick={handleLogin}>
            Ingresar con gmail
        </Button>
    )
}