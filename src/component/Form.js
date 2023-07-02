import React from 'react'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';



const Form = () => {

const auth= getAuth();
const [email,setEmail] = useState("");
const [password, setPassword] = useState("");

const signIn = (e)=>{
    e.preventDefault();
signInWithEmailAndPassword(auth, email,password)
.then((userCredential)=>{
    console.log(userCredential)
}).catch((error)=>{
    console.log(error)
})

}

  return (
    <>
    <div className='container'> 
        <form>
            <input placeholder='Enter your Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder='Enter you PAsswrd' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button>Login</button>
        </form>
    </div>
    </>
  )
}

export default Form