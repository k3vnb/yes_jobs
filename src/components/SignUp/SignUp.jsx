import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.css';

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = newUser;
    console.log(newUser);
    if (password !== confirmPassword) {
      alert('Password & Confirm Password do no match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setNewUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="sign-up-page">
      <h2>I don't have an account</h2>
      <span>Sign up with email and password</span>
      <form className="sign-up-page__form" onSubmit={handleSubmit}>
        <label htmlFor="displayName">
          Username
          <input
            type="text"
            name="displayName"
            className="displayName__input"
            id="displayName"
            required
            value={newUser.displayName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            className="email__input"
            id="email"
            required
            value={newUser.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            className="password__input"
            id="password"
            required
            value={newUser.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            className="password__input"
            id="confirmPassword"
            required
            value={newUser.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
