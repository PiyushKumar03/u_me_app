import { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, loginUser } from '@/redux-store/userSlice';

const AuthModal = ({ hideAuthModal, showauth, children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const [isSign, setSignIn] = useState(true);
  const showHideClassName = showauth ? "modal display-block" : "modal display-none";
  const [image, setImage] = useState('');
  const [tmpavatar, setTmpAvatar] = useState('');
  const [userDetail, setUserDetail] = useState({});

  // console.log(user);
  // fullName: "", userName: "",
  // email: "", mobileNumber: "", password: "", confirmPassword: ""

  const verifyImage = (e) => {
    const file = e.target.files[0];

    if (file.size >= 1548576) {
      return alert("Max file size is 1.5mb");
    } else {
      setImage(file);
      setTmpAvatar(URL.createObjectURL(file));
    }
  };

  const setUserInfo = (e) => {
    setUserDetail((prevDetail) => ({
      ...prevDetail, [e.target.name]: e.target.value
    }))
  };

  const uploadImgFile = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "xiba1rfu");
    data.append("cloud_name", "dlknd50rx");

    try {
      let res = await axios.post("https://api.cloudinary.com/v1_1/dlknd50rx/image/upload", data);
      return res.data.url;
    } catch (error) {
      return error;
    }
  };

  const handleCreateAccountBtn = async (e) => {
    e.preventDefault();
    if (isSign) {
      dispatch(loginUser(userDetail));
    } else {
      if(userDetail.password !== userDetail.confirmPassword) return "Password doesn't match";
      // const res = await uploadImgFile();
      dispatch(registerUser(userDetail));
    }
  };

  const handleSwitch = () => {
    setSignIn(!isSign);
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button"
          className="float-right hover:bg-violet-500/80 hover:rounded-full"
          onClick={hideAuthModal}>
          <GiCancel size={24} />
        </button>

        <p className="text-center text-xl mb-4 position-absolute">Start your journey with us.</p>

        <div className="flex justify-between border-2 bg-gray-100 px-2 py-1 rounded-full">
          <button type="button" onClick={handleSwitch} className={`${isSign && "border-2 bg-violet-500/20 border-violet-500/80 text-violet-500/80"} text-lg font-bold  w-1/2 py-2 px-6 rounded-full mr-2`}>
            LOGIN
          </button>
          <button type="button" onClick={handleSwitch} className={`${!isSign && "border-2 bg-violet-500/20 border-violet-500/80 text-violet-500/80"} text-lg font-bold w-1/2 py-2 px-6 rounded-full`}>
            REGISTER
          </button>
        </div>

        <form className="">

          {!isSign && <label className="text-lg my-2">
            Avatar
            {tmpavatar && <img src={tmpavatar} style={{ height: "50px", width: "50px", borderRadius: "50%", objectFit: "cover" }} />}
            <input type="file" name="name" className="px-4 py-1" placeholder="Avatar" onChange={verifyImage} />
          </label>}

          {!isSign && <label className="block text-lg my-2">
            Full Name
            <input type="text" onChange={setUserInfo} name="fullName" className="px-4 py-1 w-full border-2 rounded-full" placeholder="username" />
          </label>}

          {!isSign && <label className="block text-lg my-2">
            Username
            <input type="text" name="userName" onChange={setUserInfo} className="px-4 py-1 w-full border-2 rounded-full" placeholder="username" />
          </label>}

          {!isSign && <label className="block text-lg my-2">
            Email
            <input type="email" name="email" onChange={setUserInfo} className="px-4 py-1 w-full border-2 rounded-full" placeholder="email" />
          </label>}

          {isSign && <label className="block text-lg my-2">
            Email or Username
            <input type="text" name="emailorUsername" onChange={setUserInfo} className="px-4 py-1 w-full border-2 rounded-full" placeholder="username or email" />
          </label>}

          <label className="block text-lg my-2">
            Password
            <input type="password" name="password" onChange={setUserInfo} className="px-4 py-1 w-full border-2 rounded-full" placeholder="password" />
          </label>

          {!isSign && <label className="block text-lg my-2">
            Repeat your Password
            <input type="password" name="confirmPassword" onChange={setUserInfo} className="px-4 py-1 w-full border-2 rounded-full" placeholder="Enter your password again" />
          </label>}

          <button
            className=" text-white text-lg font-bold w-full py-2 px-6 rounded-full my-2 bg-violet-500/80"
            type="submit"
            onClick={handleCreateAccountBtn}
          >{isSign ? "Sign in" : "Create account"}</button>



        </form>

      </section>
    </div>
  );
};

export default AuthModal;