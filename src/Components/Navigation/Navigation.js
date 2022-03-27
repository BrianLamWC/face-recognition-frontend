import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {                      //Function and parameter received from App.js
    if (isSignedIn) { 
            return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('SignOut')} className='f3 link dim black underline pa3 pointer'>Sign Out</p> 
            </nav>
        );
    } else {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('SignIn')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
            <p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        )
    }
}

export default Navigation;

//Displays either 'Sign Out' if user is signed in and 'Sign in/Register' if user is not at the top right corner.
