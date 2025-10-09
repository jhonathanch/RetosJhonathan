import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../firebase/config";
import React from "react";
import {useDispatch} from 'react-redux'
import { registerAuth } from "./registerAuth";

export const registerAuth = (email,password)=>{
    return async (dispatch)=>{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        if (response){
            
            await updateProfile(auth.currentUser,{
                displayname: 'Jhonathan',
                photoURL : ''
            })

            const {email} = response.user
            dispatch(register({email}))
        }else{
            throw new Error('login failed')
        }
    }
}

export const Registro = () =>{

    const dispatch = useDispatch()

    const[formState,setFormState]= useState ({
        email:'jhonathan.chicaiza@uao.edu.co',
        password:'123456'
    })

    const onInputChange = (evt) => {
        const {name,value} = evt.target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    const onSubmit = (event ) => {
        event.preventDefault()
        console.log(formState)
        dispatch(registerAuth(email,password))
    }

    return(
        <>
            <h1>Registro</h1>
            <hr />
            <form onSubmit={(event) => onSubmit(event)}>
                <input name='email' type="email" onChange={(event)=>onInputChange(event)} value={email}/>
                <input name='password' type="password" onChange={(event)=>onInputChange(event)} value={email}/>
                <button type="submit">Registro</button>
            </form>
        </>
    )
}
export const loginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, photoURL } = response.user;
      dispatch(login({ uid, email, displayName, photoURL }));
    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
    }
  };
};

export const loginWithGoogle = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, email, displayName, photoURL } = result.user;
      dispatch(login({ uid, email, displayName, photoURL }));
    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
    }
  };
};

export const logoutFirebase = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
  };
};