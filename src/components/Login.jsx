import { useState } from 'react'
import { useRef } from 'react';
import { validation } from '../utils/validInput';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isError, setIsError] = useState(null);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const userData = () => {
    if(!isLoginPage){
      if(userName.current.value < 3 ){
        setIsError("letter must be greater or equal to 3")
      }
      return 
    }

    const isValid = validation(email?.current?.value, password?.current?.value);
    if(isValid){
      setIsError(isValid);
      return ;
    }

    if (!isLoginPage) {
      //sign up user
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => { 
           const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value
          })
          .then(() => {
             const{displayName,email} = auth.currentUser
             console.log({displayName,email});
             navigate('/home');
          })
          .catch((error) => {
             setIsError(error);
          });
           
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsError(errorMessage);
        });
    } 
           // sign in 
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const { displayName } = userCredential.user;
        navigate('/home');
        console.log(displayName,'sign in successfully');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsError(errorMessage);
      });
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-[#6495ed] flex justify-center items-center ">
      <div className="min-h-48 bg-[#f0f0f0] w-96 rounded-lg pt-4 ">
        {isLoginPage
          ?
          <h1 className="pt-4 px-3 pb-3 font-semibold text-lg ">Sign in </h1>
          :
          <h1 className="pt-4 px-3 pb-3 font-semibold text-lg ">Sign Up </h1>
        }

        <form className="flex flex-col w-full px-3" onSubmit={(e) => e.preventDefault()}>

          {!isLoginPage && <input type="text" placeholder="name" className="h-8 rounded-lg my-3 px-1" ref={userName} />}

          <input type="text" placeholder="email" className="h-8 rounded-lg my-3 px-1" ref={email} />
          <input type="password" placeholder="password" className="h-8 rounded-lg my-3 px-1" ref={password} />
          <button className="h-10 rounded-lg my-3 px-1 bg-[#6495ed] font-bold text-lg text-white" onClick={userData}>Submit</button>

          { isError && <div className="text-red-800">{ isError }</div> }

          {isLoginPage ? <div className="py-4">New here?
            <span className="text-lg font-semibold cursor-pointer pl-2" onClick={() => {
              setIsLoginPage(!isLoginPage);
              setIsError(null);
            }}>
              Sign Up
              </span>
          </div> :
            <div className="py-4">Already Sign Up?
            <span className="text-lg font-semibold cursor-pointer pl-2" onClick={() => {
              setIsLoginPage(!isLoginPage);
              setIsError(null);
            }}>
              Sign in
              </span>
          </div> }

        </form>

      </div>
    </div>

  )
}

export default Login 
