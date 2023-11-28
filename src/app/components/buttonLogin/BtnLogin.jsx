// "use client"
// import { Button } from "@nextui-org/button";
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// import { useState } from "react";
// import toast, { Toaster } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';

// export default function BtnLogin() {

//     const provider = new GoogleAuthProvider();
//     const firebaseConfig = {
//         apiKey: "AIzaSyCjMVzLiryaABg_Yc1Wco5cvrzp67DoUWw",
//         authDomain: "ranking-peluqueriapp.firebaseapp.com",
//         projectId: "ranking-peluqueriapp",
//         storageBucket: "ranking-peluqueriapp.appspot.com",
//         messagingSenderId: "850437328091",
//         appId: "1:850437328091:web:dcae914475c8405e60d0fe",
//         measurementId: "G-J543N4YJ60"
//     };
//     const app = initializeApp(firebaseConfig);
//     //  const analytics = getAnalytics(app);
//     const auth = getAuth();
//     const [userExist, setUserExist] = useState(null)
//     const [dataUser, setDataUser] = useState([])
//     const router = useRouter()


//     const handleLogout = async () => {
//         signOut(auth).then(() => {
//             setUserExist(null)
//             toast.success(`Gacias vuelvas prontos! ${dataUser.displayName}`)
//         }).catch((error) => { });
//     }

//     const handleLogin = async () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 // This gives you a Google Access Token. You can use it to access the Google API.
//                 const credential = GoogleAuthProvider.credentialFromResult(result);
//                 const token = credential.accessToken;
//                 // The signed-in user info.
//                 const user = result.user;

//                 setUserExist(user) // ESTE ESTADO LO USO PARA SWITCHEAR EL BOTON DE INGRESAR MAIL CON EL DE CERRAR SESION
//                 setDataUser(user) // EN ESTE ESTADO MUESTRO DATA DEL USUARIO
//                 toast.success(`Bienvenido/a! ${result.user.displayName}`)

//                 // IdP data available using getAdditionalUserInfo(result)
//                 // Redirigir a la página principal
//                 router.push('/inicio')

//                 // ...
//             }).catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // The email of the user's account used.
//                 const email = error.customData.email;
//                 // The AuthCredential type that was used.
//                 const credential = GoogleAuthProvider.credentialFromError(error);
//                 // ...
//             });
//     };

//     return (
//         <>
//             <Toaster
//                 position="bottom-right"
//                 reverseOrder={false}
//             />
//             {
//                 userExist === null
//                     ?
//                     <Button className="btnLogin" variant="shadow" onClick={handleLogin}>
//                         Ingresar con gmail
//                     </Button>
//                     :
//                     <Button onClick={handleLogout} color="danger">
//                         Cerrar sesión
//                     </Button>
//             }
//         </>
//     )
// }
'use client'
import { Button } from "@nextui-org/button";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'; // Cambio de 'next/navigation' a 'next/router'
import { initializeFirebase } from "../../../../firebase";
//import { initializeFirebase } from './firebase'; // Importar la función de inicialización de Firebase

export default function BtnLogin() {
    const [userExist, setUserExist] = useState(null);
    const [dataUser, setDataUser] = useState({});
    const router = useRouter();

    useEffect(() => {
        initializeFirebase(); // Inicializar Firebase en el cliente solo una vez
    }, []);

    const handleLogout = async () => {
        const auth = getAuth(); // Obtener la instancia de autenticación cada vez que se necesita
        try {
            await signOut(auth);
            setUserExist(null);
            toast.success(`¡Gracias! Vuelve pronto, ${dataUser.displayName}`);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    const handleLogin = async () => {
        const auth = getAuth(); // Obtener la instancia de autenticación cada vez que se necesita
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result?.user;

            setUserExist(user);
            setDataUser(user);
            toast.success(`¡Bienvenido/a, ${user?.displayName}!`);
            router.push('/inicio');
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            {
                userExist === null
                    ? <Button className="btnLogin" variant="shadow" onClick={handleLogin}>
                        Ingresar con Gmail
                    </Button>
                    : <Button onClick={handleLogout} color="danger">
                        Cerrar sesión
                    </Button>
            }
        </>
    );
}

