import React from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendPasswordResetEmail(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return <div className='text-center'>
      <h3>Please Verify Email</h3>
      <button
        onClick={async () => {
          await sendEmailVerification();
          toast('Resend email');
        }}
      >
        Verify email
      </button>
      <ToastContainer />
    </div>
  }
  return children;
};

export default RequireAuth;