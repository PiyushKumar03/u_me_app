import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PostModal from './PostModal';
import { getAllPosts } from '@/redux-store/postSlice';
import FeedCard from './FeedCard';

const MainPage = () => {
  const [showpostmodal, setShowPostModal] = useState(false);
  const posts = useSelector((state) => state.postReducer.posts);
  const user = useSelector((state) => state.userReducer.user);
  console.log(posts);
  const dispatch = useDispatch();
  const openpostModal = () => {
    setShowPostModal(true);
  };
  const closepostModal = () => {
    setShowPostModal(false);

  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return <>

    <PostModal showpostmodal={showpostmodal} closepostModal={closepostModal} />
    <div className='flex flex-col items-center justify-around'>
      {user && <div className='border-2 rounded-md flex items-center justify-between w-3/5 mb-2'>
        {/* <div className=''> */}
        <div className='flex items-center p-2 w-full'>
          <img
            src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
            alt='Pic'
            className='h-14 w-16 rounded-full'
          />
          <div className='ml-3 w-full'>
            <p className='block w-full text-2xl mb-2'>Hii Piyush, Welcome Back...</p>
            <button
              className='w-full bg-violet-500/80 text-white text-xl font-bold px-5 py-2 rounded-3xl'
              onClick={openpostModal}
            >What's on your mind?</button>
          </div>
          {/* </div> */}
        </div>
      </div>}

      {posts.map((post) => {
        return <FeedCard key={post._id} {...post} />
      })}

    </div>

  </>
}

export default MainPage