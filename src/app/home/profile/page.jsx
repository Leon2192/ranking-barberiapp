"use client"
import { useContext, useEffect } from "react";
import { contextAuth } from "../../context/contextAuth";

export default function Perfil(){

    const { userExist, dataUser } = useContext(contextAuth) || {};

    // console.log(dataUser);

    useEffect(() => {
        userExist ? console.log(dataUser) : console.log('no llego');
    }, [dataUser, userExist])

    return(
        <>
            hola
        </>
    )
}