import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn = (e) => {
       auth.signInWithPopup(provider)
    }
    return (
        <div className = "login">
            <div className = "login__logo">
                <img 
                    src = "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/233px-Discord_logo.svg.png"
                    alt = ""
                />
                <h2>Design and developed by Code With Akky</h2>
            </div>
            <Button 
                onClick = {signIn}
                className = "login__button">Sign In</Button>
        </div>
    )
}

export default Login
