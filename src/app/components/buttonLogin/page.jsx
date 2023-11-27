"use client"
import { Button } from "@nextui-org/button";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

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
    const [userExist, setUserExist] = useState(null)
    const [dataUser, setDataUser] = useState([])


    const handleLogout = async () => {
        signOut(auth).then(() => {
            setUserExist(null)
            toast.success(`Gacias vuelvas prontos! ${dataUser.displayName}`)
        }).catch((error) => { });
    }

    const handleLogin = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                
                setUserExist(user) // ESTE ESTADO LO USO PARA SWITCHEAR EL BOTON DE INGRESAR MAIL CON EL DE CERRAR SESION
                setDataUser(user) // EN ESTE ESTADO MUESTRO DATA DEL USUARIO
                toast.success(`Bienvenido/a! ${result.user.displayName}`)

                // IdP data available using getAdditionalUserInfo(result)
                // Redirigir a la página principal

                // ...
            }).catch((error) => {
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
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            {
                userExist === null
                    ?
                    <Button className="btnLogin" variant="shadow" onClick={handleLogin}>
                        Ingresar con gmail
                    </Button>
                    :
                    <Button onClick={handleLogout} color="danger">
                        Cerrar sesión
                    </Button>
            }
        </>
    )
}