import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { axioInstance } from '../utilities/axiosService';
import './Auth.css';

const Register = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm your password'),
    role: Yup.string().required('Role is required'),
    shop_name: Yup.string(),
    shop_address: Yup.string(),
    experience: Yup.string(),
  });

  const [loading, setLoading] = useState(false);

  const userRegistration = async (values) => {
    try {
      setLoading(true);
      const response = await axioInstance.post('user/register', values);
      if (response.status === 201) {
        setLoading(false);
        localStorage.setItem('token', response?.data?.token);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: '',
          shop_name: '',
          shop_address: '',
          experience: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Registration Data:', values);
          userRegistration(values);
        }}
      >
        {({ values }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <Field as="select" id="role" name="role">
                <option value="">Select a role</option>
                <option value="customer">Customer</option>
                <option value="tailor">Tailor</option>
              </Field>
              <ErrorMessage name="role" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" placeholder="Enter your name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            {values.role === 'tailor' && (
              <>
                <div className="form-group">
                  <label htmlFor="shop_name">Shop Name</label>
                  <Field type="text" id="shop_name" name="shop_name" placeholder="Enter your shop name" />
                  <ErrorMessage name="shop_name" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="shop_address">Shop Address</label>
                  <Field type="text" id="shop_address" name="shop_address" placeholder="Enter your shop address" />
                  <ErrorMessage name="shop_address" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Experience</label>
                  <Field type="text" id="experience" name="experience" placeholder="Enter your experience" />
                  <ErrorMessage name="experience" component="div" className="error" />
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <Field type="email" id="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" placeholder="Enter your password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>

            <button disabled={loading} type="submit" className="submit-button">
              {loading ? 'Loading...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
