import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './Header.css';

const Header = ({ currentUser }) => {
  const handleSignOut = () => auth.signOut();
  const signInOutBtn = currentUser ? (
    <button type="button" onClick={handleSignOut}>
      Sign Out
    </button>
  ) : (
    <button type="button" onClick={signInWithGoogle}>
      Sign In with Google
    </button>
  );

  const greeting = currentUser ? (
    <span>{`Hello ${currentUser.displayName}`}</span>
  ) : (
    <span>Hi</span>
  );

  return (
    <header>
      {signInOutBtn}
      {greeting}
    </header>
  );
};

export default Header;
