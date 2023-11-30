"use client"
import { Button } from "@nextui-org/button";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { contextAuth } from "@/app/context/contextAuth";

export default function BtnLogin() {

    const { handleLogin } = useContext(contextAuth) || {}

    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <Button className="btnLogin" variant="shadow" onClick={handleLogin}>
                Ingresar con gmail
            </Button>
        </>
    )
}
