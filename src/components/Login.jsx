import { useState } from 'react'
import { useRef } from 'react';
import { validation } from '../utils/validInput';

const Login = () => {
     const[isLoginPage, setIsLoginPage] = useState(true);
     const[isError, setIsError] = useState(null);
     const userName = useRef(null);
     const email = useRef(null);
     const password = useRef(null);

     const userData = () =>{
        if(!isLoginPage) {
            const isValid =  validation(email?.current?.value, password?.current?.value, userName?.current?.value)
            console.log(isValid)
        }
     }

    return (
        <div className="h-[100vh] w-[100vw] bg-[#6495ed] flex justify-center items-center ">
          <div className="min-h-48 bg-[#f0f0f0] w-96 rounded-lg pt-4 ">
            { isLoginPage
             ? 
             <h1 className="pt-4 px-3 pb-3 font-semibold text-lg ">Sign in </h1>
             :
             <h1 className="pt-4 px-3 pb-3 font-semibold text-lg ">Sign Up </h1>
            }
            
            <form className="flex flex-col w-full px-3" onSubmit={(e)=> e.preventDefault()}>

                { !isLoginPage && <input type="text" placeholder="name" className="h-8 rounded-lg my-3 px-1" ref={userName} /> }

                <input type="text" placeholder="email" className="h-8 rounded-lg my-3 px-1" ref={email} /> 
                <input type="password" placeholder="password" className="h-8 rounded-lg my-3 px-1" ref={password} />
                <button className="h-10 rounded-lg my-3 px-1 bg-[#6495ed] font-bold text-lg text-white" onClick={userData}>Submit</button>
                
     
                {isLoginPage ? <div className="py-4">new here?
                     <span className="text-lg font-semibold cursor-pointer" onClick={()=> setIsLoginPage(!isLoginPage)}>Sign Up</span>
                     </div> : 
                <div className="py-4">already sign up? 
                    <span className="text-lg font-semibold cursor-pointer" onClick={()=> setIsLoginPage(!isLoginPage)}>sign in</span>
                    </div> }
                
            </form>
            
          </div>
        </div>
       
    )
}

export default Login 
