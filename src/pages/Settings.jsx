import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCreditCard } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { useAuthContext } from '../auth/useAuthContext'

export default function Settings() {

    const user = useAuthContext()

    return (
        <div className='flex items-center flex-col mx-auto pt-4 w-[315px]'>
            <nav className='flex items-center justify-between w-full'><Link to="../home"><GiHamburgerMenu className='h-12 w-8' /></Link>
                <p >{user?.user?.displayName || "Username"}</p>
            </nav>

            <main className='flex flex-col pt-12 w-full'>
                <div className='flex items-center mb-6 min-w-fit w-full'>
                    <img className='rounded-full ring-offset-2 ring-2 h-12 w-12' src={user?.user?.photoURL || ""} />
                    <div className='pl-4'>
                        <h3 className='font-medium text-lg'>{user?.user?.displayName || "Username"}</h3>
                        <p className='text-gray-700 mt-2'>{user?.user?.email || "email@test.com"}</p>
                    </div>
                </div>
                <div className='flex items-center mb-6 min-w-fit w-full'>
                    <BsCreditCard className='h-12 w-10 mr-2' />
                    <div className='pl-4'>
                        <h3 className='font-medium text-lg'>Premium subscription</h3>
                        <p className='text-gray-700 mt-2'>Inactive</p>
                    </div>
                </div>
            </main >
        </div >
    )
}
