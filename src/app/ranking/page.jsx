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
            <div className="fixed bottom-0 w-full bg-gray-900 text-white p-2">
                <div className="flex justify-around max-w-screen-lg mx-auto p-2">
                    {/* Los íconos fijos en la parte inferior */}
                    <div className="menuButton">
                        <FaHome style={{ color: '#ff006e' }} size={'2.5em'} />
                    </div>
                    <div className="menuButton">
                        <FaRegStar style={{ color: '#ff006e' }} size={'2.5em'} />
                    </div>
                    <div className="menuButton">
                        <FaBell style={{ color: '#ff006e' }} size={'2.5em'} />
                    </div>
                    <div className="menuButton">
                        <FaRegUserCircle style={{ color: '#ff006e' }} size={'2.5em'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page