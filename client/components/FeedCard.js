import React, { use, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsFillBookmarkFill, BsShareFill } from 'react-icons/bs';
import FeedCardDetailModal from './FeedCardDetailModal';


const FeedCard = ({ createdAt, desc, userName, likesArray }) => {
    const [commentField, setCommentField] = useState("");
    const [feedshow, setFeedShow] = useState(false);

    const openFeedShowModal = () => { setFeedShow(true) };
    const closeFeedShowModal = () => { setFeedShow(false) };

    return <>
        <FeedCardDetailModal feedshow={feedshow} closeFeedShowModal={closeFeedShowModal}/>
        <div className='border-2 rounded-md w-3/5'>
            <div className='flex justify-between p-2'>
                <div className='flex items-center'>
                    <img
                        src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Pic'
                        className='h-12 w-12 rounded-full'
                    />
                    <div className='flex flex-col ml-2'>
                        <p className='block text-lg'>{userName}</p>
                        <p className='block text-md'>3 days ago</p>
                    </div>
                </div>
                <p className='text-4xl'>&#8230;</p>
            </div>

            <div>
                <img
                    src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Pic'
                    className=''
                    onClick={openFeedShowModal}
                />
            </div>

            <div className='p-2'>
                <div className='flex items-center justify-between text-xl my-2'>
                    {/* &#9825; */}
                    <p className='flex items-center'><span className='mr-2' ><AiFillHeart size={30} /> </span>{likesArray.length} likes</p>
                    <p className='flex '><BsBookmark size={26} className='mr-2' /> <BsShareFill size={26} /></p>
                </div>

                <div className='flex justify-between mb-2'>
                    <p><span className='text-lg font-semibold'>{userName}</span>  {desc}</p>
                </div>


                <p className='text-lg font-semibold hover:cursor-pointer' onClick={openFeedShowModal}>View all comments</p>
                <hr />
                <div className='mt-2 flex'>
                    <img
                        src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Pic'
                        className='h-10 w-10 rounded-full'
                    />
                    <textarea
                        onChange={(e) => setCommentField(e.target.value)}
                        placeholder="Write something about it..."
                        className='comment_textarea w-full ml-2 border-b-2 border-black focus:outline-none resize:none' rows={1} />
                </div>


                {commentField.length >= 3 &&
                    <button type='submit' className='text-xs bg-violet-500/80 text-white p-1 rounded-3xl mt-2 ml-10'>Comment</button>
                }

            </div>

        </div>
    </>
}

export default FeedCard