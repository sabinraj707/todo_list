import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import myvedio2 from './Mobile login (1).mp4';

function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [showAutoSaveOption, setShowAutoSaveOption] = useState(false);

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    validatePassword(passwordValue);
    setShowAutoSaveOption(false); 
  };

  const validatePassword = (passwordValue) => {
    if (passwordValue.length < 4) {
      setError('Password should be at least 4 characters');
      setIsValidPassword(false);
    } else if (passwordValue.length > 9) {
      setError('Password should not be more than 9 characters');
      setIsValidPassword(false);
    } else if (!/[a-zA-Z]/.test(passwordValue)) {
      setError('Password should contain at least one letter');
      setIsValidPassword(false);
    } else if (!/[0-9]/.test(passwordValue)) {
      setError('Password should contain at least one number');
      setIsValidPassword(false);
    } else if (!/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(passwordValue)) {
      setError('Password should contain at least one special character');
      setIsValidPassword(false);
    } else {
      setError(null);
      setIsValidPassword(true);
      setShowAutoSaveOption(true); 
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleAutoSave = () => {
    alert('Password will be auto-saved');
  };

  return (
    <div className='sign2'>
      <div className='image2'>
        <video src={myvedio2} alt="My Video" id='vedio2' autoPlay muted className="background-video" />
      </div>
      <div className="card2">
        <div className="card-header2">
          <div className="text-header2">SIGN IN</div>
        </div>
        <div className="card-body2">
          <div className="form-group2">
            <label htmlFor="username">Username:</label>
            <input 
              required 
              className="form-control2" 
              name="username" 
              id="username" 
              type="text" 
              placeholder="johnDoe123"
              title="Valid format: alphanumeric characters, 3-15 characters long"
            />
          </div>
          <div className="form-group2">
            <label htmlFor="email">Email:</label>
            <input 
              required 
              className="form-control2" 
              name="email" 
              id="email" 
              type="email" 
              placeholder="johndoe@example.com"
              title="Valid format: username@domain.com"
            />
          </div>
          <div className="form-group2">
            <label htmlFor="password">Password:</label>
            <div className="password-input2">
              <input 
                required 
                className="form-control password-input-field2" 
                name="password" 
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Password123!"
                title="Valid format: at least 4 characters, 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character"
                minLength="4"
                maxLength="9"
                value={password}
                onChange={handlePasswordChange}
              />
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-eye-icon`} onClick={handleShowPassword}></i>
            </div>
            {error && <div className="error-message2">{error}</div>}
          </div>
          {showAutoSaveOption && (
            <div className="auto-save-option2">
              <input 
                type="checkbox" 
                id="auto-save-password" 
                onChange={handleAutoSave} 
              />
              <label htmlFor="auto-save-password">Auto-save password</label>
            </div>
          )}
          <button className="btn-donate2" disabled={!isValidPassword}>
            {isValidPassword ? (
              <Link to="/Home" className='top1'>Login</Link>
            ) : (
              <span className='top1' style={{ cursor: 'not-allowed', opacity: 0.5 }}>Login</span>
            )}
          </button>
        </div>
        <div>
          <Link to="/" className='top2'>I don't have an account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

