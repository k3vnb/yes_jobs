import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentUserShape } from '../../types';
import FlyoutMenu from '../FlyoutMenu/FlyoutMenu';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './Header.css';

const Header = ({ currentUser }) => {
  const [showFlyout, setShowFlyout] = useState(false);
  const toggleShowFlyout = () => setShowFlyout(!showFlyout);
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
      <button type="button" className="button-reset" onClick={toggleShowFlyout}>
        Menu
      </button>
      <Link to="/">
        <h1>Yes Jobs!</h1>
      </Link>
      {signInOutBtn}
      {greeting}
      {showFlyout && <FlyoutMenu />}
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
