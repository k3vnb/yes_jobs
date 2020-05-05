import React from 'react';
import { connect } from 'react-redux';
import { currentUserShape } from '../../types';
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

Header.propTypes = {
  currentUser: currentUserShape.currentUser,
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
