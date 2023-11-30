"use client";
import { Button } from "@nextui-org/button";
import app from '../../../../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function BtnLogin() {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const [userExist, setUserExist] = useState(null);
    const [dataUser, setDataUser] = useState([]);
    const router = useRouter();

    const handleLogout = async () => {
        signOut(auth).then(() => {
            setUserExist(null);
            toast.success(`¡Gracias! ¡Vuelve pronto, ${dataUser.displayName}!`);
        }).catch((error) => { });
    }

    const handleLogin = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                setUserExist(user);
                setDataUser(user);
                toast.success(`¡Bienvenido/a, ${result.user.displayName}!`);

                router.push('/inicio');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
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
                        Ingresar con Gmail
                    </Button>
                    :
                    <Button onClick={handleLogout} color="danger">
                        Cerrar sesión
                    </Button>
            }
        </>
    )
}
