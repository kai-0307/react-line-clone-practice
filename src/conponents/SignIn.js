import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function signin() {
    function signInwithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

  return (
    <div>
        <Button　onClick = {signInwithGoogle}> 
            グーグルでログインする
        </Button>
    </div>
  )
}

export default signin