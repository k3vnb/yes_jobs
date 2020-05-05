import React from 'react';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      // set currentUser to null if !userAuth
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <SignUp />
      </div>
    );
  }
}

export default App;
