"use client"
import Login from './login/page'
import { AuthProvider } from '@/app/context/contextAuth'

export default function Home() {
  
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>

  )
}
