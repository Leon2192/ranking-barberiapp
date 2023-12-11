import { CiBellOn, CiHome, CiUser } from 'react-icons/ci'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <>
            {children}
            <div className="fixed bottom-0 w-full bg-gray-800 text-white p-2">
                <div className="flex justify-around max-w-screen-lg mx-auto">
                    {/* Los íconos fijos en la parte inferior */}
                    <div className="menuButton">
                        <Link href={'/home'}>
                            <CiHome style={{ color: 'white' }} size={'3em'} />
                        </Link>
                    </div>
                    <div className="menuButton">
                        <AiOutlineMenuUnfold style={{ color: 'white' }} size={'3em'} />
                    </div>
                    <div className="menuButton">
                        <Link href={'/home'}>
                            <CiBellOn style={{ color: 'white' }} size={'3em'} />
                        </Link>
                    </div>
                    <div className="menuButton">
                        <Link href={'/home/profile'}>
                            <CiUser style={{ color: 'white' }} size={'3em'} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}