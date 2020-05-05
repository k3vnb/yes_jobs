import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import LandingPage from './components/LandingPage/LandingPage';
import { currentUserShape } from './types';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      // set currentUser to null if !userAuth
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  setCurrentUser: func.isRequired,
  currentUser: currentUserShape.currentUser,
};

App.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
