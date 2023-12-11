import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="text-center mb-4">
                <Image src="/logo2.png" width={200} height={200} alt={'Logo'} />
            </div>
            

        </div>
    )
}

export default page