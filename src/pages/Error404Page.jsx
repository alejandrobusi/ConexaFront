import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <div className={`container-fluid `}>
      <div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
        <h1 className='display-1 text-white'>Error 404</h1>
        <button className='btn btn-dark border border-danger mt-5' onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </div>
  )
}

export default Error404Page;

