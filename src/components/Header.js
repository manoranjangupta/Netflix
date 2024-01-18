import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
 import {  onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        navigate("/error");
      });
  };

 //const unSubscribe= 
 useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {      
        const {uid,email,displayname,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL}))
        navigate("/browse");
       
      } else {
        dispatch(removeUser({}));
        navigate("/");
       //
      }
    });
   // Unsubscribe useEffect without mistake
   return () => {unSubscribe();}
   },[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 px-8 py-2  bg-gradient-to-b from-black"
        src={LOGO}
        alt="logo"
      ></img>
      {user && (
        <div className="flex rounded-lg w-30 h-10 ">
          <img className="rounded-lg" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white p-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
