// "use client"
// import { Button } from "@nextui-org/button";
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// import { useState } from "react";
// import toast, { Toaster } from 'react-hot-toast';
// import { auth, provider } from "../../../../firebase";
// import { useRouter } from 'next/navigation';

// export default function BtnLogin() {

//     const provider = new GoogleAuthProvider();
//     const firebaseConfig = {
//         apiKey: process.env.FIREBASE_API_KEY,
//         authDomain: process.env.AUTH_DOMAIN,
//         projectId: process.env.PROJECT_ID,
//         storageBucket: process.env.STORAGE_BUCKET,
//         messagingSenderId: process.env.MESSAGING_SENDER_ID,
//         appId: process.env.APP_ID,
//         measurementId: process.env.MEASUREMENT_ID
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

// ButtonLogin.js
'use client'
import { useState } from 'react';
import { Button } from '@nextui-org/button';
import { auth, provider, signInWithPopup, GoogleAuthProvider, signOut } from '../../../../firebase';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function BtnLogin() {
    const [userExist, setUserExist] = useState(null);
    const [dataUser, setDataUser] = useState([]);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUserExist(null);
            toast.success(`¡Gracias, vuelve pronto! ${dataUser.displayName}`);
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            setUserExist(user);
            setDataUser(user);
            toast.success(`¡Bienvenido/a! ${result.user.displayName}`);

            router.push('/inicio');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            {
                userExist === null
                    ?
                    <Button className="btnLogin" variant="shadow" onClick={handleLogin}>
                        Ingresar con Gmail
                    </Button>
                    :
                    <Button onClick={handleLogout} color="danger">
                        Cerrar sesión
                    </Button>
            }
        </>
    );
}
