import React, { useState } from 'react';
import { axioInstance } from '../utilities/axiosService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    role: Yup.string().required('Role is required'),
    // terms: Yup.boolean()
    //   .oneOf([true], 'You must accept the terms and conditions')
    //   .required('You must accept the terms and conditions'),
  });
 
  const navigate = useNavigate()
  const[loading,setLoading] = useState(false);

  const userLogin =  async (values)=>{
    
    try{
      setLoading(true)
      const response = await  axioInstance.post('user/login',values);
      if (response.status==201) {
        setLoading(false)
        localStorage.setItem('token',response?.data?.token);
        navigate('/admin')
      }

    }
    catch(error){
      console.log(error.message)
      setLoading(false)
    }

  }
 
  
  return (
    <div className="form-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '', role: 'customer'}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          userLogin(values)
          // console.log('Login Data:', values);
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <Field as="select" id="role" name="role">
              <option value="customer">Customer</option>
              <option value="tailor">Tailor</option>
            </Field>
            <ErrorMessage name="role" component="div" className="error" />
          </div>
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
          {/* <div className="terms-container">
            <Field type="checkbox" id="terms" name="terms" className="terms-checkbox" />
            <label htmlFor="terms">I agree to the terms and conditions</label>
            <ErrorMessage name="terms" component="div" className="error" />
          </div> */}
          <button disabled={loading} type="submit" className="submit-button">{loading ? 'Loading...' : 'Login'}</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
