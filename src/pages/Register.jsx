import React, { useEffect, useState } from 'react';
import { ApiClient } from '../api/services';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    lastName: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  
  const apiClient = new ApiClient();

  const handleChange = ( e ) => {
    const { id, value } = e.target;
    setFormData({...formData, [id]: value,});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //valida el checkbox
    if (!isChecked) {
      setCheckboxError(true);
      return;
    }

    //valida las contase►4as
    if (formData.password === formData.confirmPassword) {
      setConfirmPassword(false)
      setCheckboxError(false);
      delete formData.confirmPassword;
      console.log({
        formData,
        isChecked
      });
      const createUser = await apiClient.createUser(formData);
    } else {
      setConfirmPassword(true);
    }
  };
  const handleCheck = () => {
    setIsChecked(!isChecked);
    if(isChecked) {
      setCheckboxError(false);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-4'>
          <form className='mt-5' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email </label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" onChange={handleChange} minLength={6} maxLength={12} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Repetir contraseña</label>
              <input type="password" className="form-control" id="confirmPassword" onChange={handleChange} required minLength={6} maxLength={12}/>
              {
                confirmPassword && (
                  <div className='text-danger'>La contraseñas no coinciden</div>
                )
              }
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" onChange={handleChange} required maxLength={25}/>
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="lastName" onChange={handleChange} required maxLength={25}/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="checkbox" checked={isChecked} onChange={handleCheck}/>
              <label className="form-check-label" htmlFor="checkbox">Acepto los terminos y condiciones</label>
              {
                checkboxError && (
                  <div className="invalid-feedback d-block">
                    Debe aceptar los términos y condiciones para continuar.
                  </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">Registrarme</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
