"use client"
import Page from './inicio/page'
import Login from './login/page'
import { AuthProvider } from '@/app/context/contextAuth'
import { contextAuth } from "../app/context/contextAuth";
import { useContext, useEffect } from 'react';
import '../../public/sw'

export default function Home() {

  const { userExist, handleLogout } = useContext(contextAuth) || {};

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registrado con éxito:', registration);
          })
          .catch((error) => {
            console.log('Error al registrar el Service Worker:', error);
          });
      });
    }
  }, []);

  return (
    <AuthProvider>
      {userExist ? <Page /> : <Login />}
    </AuthProvider>

  )
}
