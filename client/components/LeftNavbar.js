'use client';
import React, { use, useEffect, useState } from 'react'
import { navbar_list } from '@/data/navbar_data';
import AuthModal from './AuthModal';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical } from 'react-icons/bs';

const LeftNavbar = () => {
    const user = useSelector((state) => state.userReducer.user);
    const [showauth, setShowAuth] = useState(false);
    const showAuthModal = () => {
        setShowAuth(true);
    };
    const hideAuthModal = () => {
        setShowAuth(false);
    };
    // useEffect(() => {
    //     console.log(window.location.href);
    // });
    
    return <>
        <AuthModal showauth={showauth} hideAuthModal={hideAuthModal} />

        <div className=''>
            <Link href={"/"}><p className='text-3xl font-bold text-center py-4'>APP</p></Link>
        </div>

        <div className='flex flex-col justify-between h-96'>
            <div>
                {navbar_list.map((item) => {
                    return <p key={item.id} 
                    className='hover:bg-violet-100 flex items-center text-xl font-medium py-2 capitalize px-5'>
                        {item?.icons}
                        <Link href={`/${item.link}`} ><span className='ml-2'>{item.title}</span></Link>
                    </p>
                })}
            </div>


            {user ? <div className='w-full'>
                    {/* <div className=''> */}
                    <div className='flex items-center justify-between p-2 w-full'>
                        <Link href={`/${user.userName}`}>
                            <div className='flex items-center'>
                                <img
                                    src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                                    alt='Pic'
                                    className='h-14 w-14 rounded-full'
                                />
                                <div className='ml-3'>
                                    <p className='block text-xl'>dottt</p>
                                    <p className='block text-md mb-2 text-gray-600'>Piyush Kumar</p>
                                </div>
                            </div>
                        </Link>
                        <BsThreeDotsVertical size={30} />
                    </div>
                </div> :
                <div className='text-center mx-2 rounded-full bg-violet-500/80'>
                    <button
                        className='text-xl font-medium py-2 capitalize w-full text-white'
                        type='button'
                        onClick={showAuthModal}
                    >Signin</button>
                </div>
            }


        </div>


    </>
}

export default LeftNavbar