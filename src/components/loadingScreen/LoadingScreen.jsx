import React from 'react';
import { spinnerContainer, spinner } from './loadingScreen.module.css';
import spinnerLogo from '../../assets/spinnerLogo.png';

const LoadingScreen = () => {
  return (
    <div className={spinnerContainer}>
      <img className={spinner} src={spinnerLogo} alt='logoSpinner' />
    </div>
  );
};

export default LoadingScreen;
