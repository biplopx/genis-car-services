import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { Helmet } from 'react-helmet-async';
import PageTitile from '../../Shared/PageTitle/PageTitile';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);


  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading></Loading>
  }

  if (user) {
    console.log('user', user);
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    createUserWithEmailAndPassword(email, password);
    updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home');
  }
  return (
    <div className='container py-5'>
      <PageTitile title="Register"></PageTitile>
      <div className="w-50 mx-auto border p-3 rounded">
        <h2 className="text-center text-primary">Registration</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
          </Form.Group>
          <input
            disabled={!agree}
            className='d-block mx-auto btn btn-primary mt-2'
            type="submit"
            value="Register" />
        </Form>
        <p className='mt-3 pe-auto'>New to Genius Car <Link to='/login' className='text-danger text-decoration-none'>Please Register</Link></p>
        <SocialLogin></SocialLogin>
      </div>


    </div>
  );
};

export default Register;