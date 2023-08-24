import { createPost } from '@/redux-store/postSlice';
import axios from 'axios';
import React, { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';


const PostModal = ({ showpostmodal, closepostModal }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    const showHideClsName = showpostmodal ? "modal display-block" : "modal display-none";
    const [desc, setDesc] = useState('');
    const [postImg, setPostImg] = useState('');
    const [tmpPostImg, setTmpPostImg] = useState('');

    const verifyImage = (e) => {
        const file = e.target.files[0]
        if (file.size >= 1548576) {
            return alert("Max file size is 1.5mb");
          } else {
            setPostImg(file);
            setTmpPostImg(URL.createObjectURL(file));
          }
    };

    const uploadPostImg = async() => {
        const data = new FormData();
        data.append("file", postImg);
        data.append("upload_preset", "xiba1rfu");
        data.append("cloud_name", "dlknd50rx");
    
        try {
          let res = await axios.post("https://api.cloudinary.com/v1_1/dlknd50rx/image/upload", data);
          return res.data.url;
        } catch (error) {
          return error;
        }
    };

    const handleCreatePost = async(e) => {
        e.preventDefault();
        console.log(desc);
        // const res = await uploadPostImg();
        // console.log(res);
        // dispatch(createPost({desc, postImg: res, userName: user.userName}));
        dispatch(createPost({desc,userName: user.userName}));
    };

    return (
        <div className={showHideClsName}>
            <section className='post-modal-main'>
                <button type="button"
                    className="float-right hover:bg-violet-500/80 hover:rounded-full"
                    onClick={closepostModal}>
                    <GiCancel size={24} />
                </button>

                <p className='float-clear text-center text-xl mb-2'>Create a POST</p>

                <div className='flex items-center justify-between'>
                    <div className='w-1/2'>
                        <textarea placeholder="Write something about it..."
                            className='w-full h-96 border-2 border-black'
                            rows={1} cols={5}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div className="h-96 border-l-6 border-green"></div>
                    <div className='w-1/2'>
                    {tmpPostImg && <img
                        src={tmpPostImg} 
                        style={{ height: "388px", width: "500px", borderRadius: "10px", objectFit: "cover" }}
                    />
                    }
                    <input type="file" name="name" className="px-4 py-1" placeholder="Avatar" onChange={verifyImage} />

                    </div>
                </div>

                <button
                    className=" text-white text-lg font-bold w-full py-2 rounded-full mt-4 bg-violet-500/80"
                    type="submit"
                    onClick={handleCreatePost}
                >Post</button>
            </section>
        </div>
    )
}

export default PostModal;