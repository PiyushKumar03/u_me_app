import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const FeedCardDetailModal = ({ feedshow, closeFeedShowModal }) => {
    const feedClassModal = feedshow ? "modal display-block" : "modal display-none";
    return (
        <div className={feedClassModal}>
            <section className='feed-detail-modal-main flex'>
                <div className='w-1/2'>
                    <img
                        src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Pic'
                        className='h-96'
                    />
                </div>
                <div className='border-2 w-full px-2'>
                    <div className='py-1 flex items-center justify-between border-2'>
                        <div className='flex items-center'>
                            <img
                                src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Pic'
                                className='h-10 w-10 rounded-full'
                            />
                            <p className='block text-md ml-2'>dottt</p>
                        </div>
                        <p className='text-xl'><BsThreeDots /></p>
                    </div>

                <div className='overflow-y-auto h-56'>
                    <div className='flex justify-between w-full'>
                            <img
                                src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Pic'
                                className='aspect-square h-10 w-10 rounded-full mr-2'
                            />
                        <p className='border-2'><span className='text-lg font-semibold'>dottt</span>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>


                </div>
            </section>
        </div>
    )
}

export default FeedCardDetailModal;