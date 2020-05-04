import React from 'react';
import "./SignInForm.css";

import { signInWithGoogle } from '../../firebase/firebase.utils';

function SignInForm() {
  return (
    <div>
      <button onClick={signInWithGoogle} >Sign in with Google</button>
    </div>
  )
}

export default SignInForm
