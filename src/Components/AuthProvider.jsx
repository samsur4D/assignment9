import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,
    GoogleAuthProvider, signInWithPopup,GithubAuthProvider , FacebookAuthProvider ,onAuthStateChanged, 
    signOut,
    updateProfile} from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';
import { Result } from 'postcss';
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
const[user , setUser] = useState(null)
const googleProvider = new  GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new  FacebookAuthProvider()

const updateUserProfile = (name , image) =>{
  return updateProfile(auth.currentUser, {
      displayName:name,
      photoURL: image
    })
}

const registerUser = (email , password) =>{
   return  createUserWithEmailAndPassword(auth,email,password)
       
}
const loginUser = (email , password) =>{
     return   signInWithEmailAndPassword(auth,email,password)

}
 const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
 }
 const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider)
 }
 const facebookLogin = () =>{
    return signInWithPopup(auth, facebookProvider)
 }
 const logout = () =>{
    return signOut(auth)
 }
const authInfo ={
    registerUser,loginUser, googleLogin,githubLogin,
    updateUserProfile,facebookLogin,user,setUser,logout
}

useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
        if (currentuser) {
          setUser(currentuser)
        } else {
          setUser(null)
        }
      });
      return ()=>{
        unsubscribe()
      }
},[])
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                   {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;