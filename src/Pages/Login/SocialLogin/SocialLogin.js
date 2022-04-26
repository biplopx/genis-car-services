import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>
  }

  if (error || error1) {
    errorElement = <div>
      <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    </div>
  }

  if (user) {
    navigate('/home');
  }

  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        <p className='m-2'>or</p>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
      </div>
      {
        errorElement
      }
      <button onClick={() => signInWithGoogle()} className="btn w-100 p-2 border rounded mb-3">
        <p className='m-0 text-center fs-5'>
          <img src={google} width="30px" alt="" /> Sign in with Google</p>
      </button>
      <button className="btn w-100 p-2 border rounded mb-3">
        <p className='m-0 text-center fs-5'>
          <img src="https://i.postimg.cc/tRwrhM0w/google.png" width="30px" alt="" /> Sign in with Facebook</p>
      </button>
      <button onClick={() => signInWithGithub()} className="btn w-100 p-2 border rounded">
        <p className='m-0 text-center fs-5'>
          <img src={github} width="30px" alt="" /> Sign in with Github</p>
      </button>
    </div>
  );
};

export default SocialLogin;