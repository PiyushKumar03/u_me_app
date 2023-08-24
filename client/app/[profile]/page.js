'use client';
import Link from 'next/link';
import React, { useReducer } from 'react'
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const posts = useSelector((state) => state.postReducer.posts);
  const user = useSelector((state) => state.userReducer.user);

  const getUserPostList = () => {
      const userList = posts.filter((item) => item.userName === user.userName);
      console.log(userList);
  };

  useReducer(() => {
    getUserPostList();
  },[]);

  return (
    <div>
      <div className='border-2'>
        <div className='flex justify-center w-full mx-2 my-2'>
          <img
            src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
            alt='Pic'
            className='aspect-square h-36 w-36 rounded-full'
          />
          <div className='border-2 mx-4 w-1/2'>
            <div className='flex items-center justify-between'>
              <p className='text-2xl font-semibold'>dottt</p>
              <Link href={"/account/edit"}><button className='px-4 py-1 text-lg font-md border-2 bg-gray-300 rounded-full'>Edit</button></Link>
            </div>
            <div>
              <p className='text-lg font-md'>Piyush Kumar</p>
              <p>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable English. </p>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p>My Posts</p>
          <div className='flex flex-wrap justify-center'>
            {list.map((item) => {
              return <div className='' key={item}>
                <img
                  src='https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                  alt='Pic'
                  className='aspect-square h-[300px] w-[250px] mr-6 mb-4 rounded-md'
                />
              </div>
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProfilePage;




{/* <div className='' 
style={myStyle}>
    <h1 className='text-red-400'>Hello</h1>
</div> */}


// const myStyle={
//   backgroundImage:
// "url('https://plus.unsplash.com/premium_photo-1673970474453-7c49815647ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60')",
//   height:'20vh',
//   // marginTop:'-70px',
//   // fontSize:'50px',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };