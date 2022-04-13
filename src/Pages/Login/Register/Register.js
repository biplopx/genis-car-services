import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  }
  return (
    <div className='container py-5'>
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
          <Button variant="primary" type="submit">
            Register
          </Button>

          <p className='mt-3 pe-auto'>New to Genius Car <Link to='/login' className='text-danger text-decoration-none'>Please Register</Link></p>

        </Form>
      </div>

    </div>
  );
};

export default Register;