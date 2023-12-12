import Image from 'next/image'
import React from 'react'
import { FaHome, FaRegStar, FaRegUserCircle } from 'react-icons/fa'
import { FaBell } from "react-icons/fa6";

const page = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="text-center mb-4">
                    <Image src="/logo2.png" width={150} height={150} alt={'Logo'} />
                </div>
            </div>
        </>
    )
}

export default page