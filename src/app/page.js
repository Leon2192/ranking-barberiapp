"use client"
import Image from 'next/image'
import Login from './login/page'
import toast, { Toaster } from 'react-hot-toast';


export default function Home() {
  
  return (
    <div>
      <Login />
    </div>

  )
}
