import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './Style.css';
import vedio from './Sign up (1).mp4'


function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPasswords, setShowPasswords] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setPasswordMatch(false);
    } else if (!validatePassword(password)) {
      setError('Password must be  contain at least one letter, one number, and one special character');
    } 
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,8}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    if (username && email && password && confirmPassword && validatePassword(password)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirm-password':
        setConfirmPassword(value);
        if (value === password) {
          setPasswordMatch(true);
          setError(null);
        } else {
          setPasswordMatch(false);
          setError('Passwords do not match');
        }
        break;
      default:
        break;
    }
    validateForm();
  };

  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  return (
    <div className='sign'>
      <div className='video'>
      <video src={vedio} autoPlay loop={false} muted currentTime={0} // start from the beginning
  onTimeUpdate={(event) => {
    const video = event.target;
    const currentTime = video.currentTime;
    const duration = video.duration;
    // Start slowly and increase speed over time
    if (currentTime < 2) {
      video.playbackRate = 0.8; // slow down
    } else if (currentTime < 4) {
      video.playbackRate = 0.8; // slightly faster
    } else {
      video.playbackRate = 1; // normal speed
    }
    // Reset to 0  after 5 seconds
    if (currentTime >= 5) {
      video.currentTime = 0;
    }
  }}
/>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="text-header">SIGN UP</div>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              required 
              className="form-control" 
              name="username" 
              id="username" 
              type="text" 
              placeholder="johnDoe123"
              title="Valid format: alphanumeric characters, 3-15 characters long"
              value={username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              required 
              className="form-control" 
              name="email" 
              id="email" 
              type="email" 
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
              placeholder="johndoe@example.com"
              title="Valid format: username@domain.com"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              required 
              className="form-control" 
              name="password" 
              id="password" 
              type={showPasswords ? "text" : "password"} 
              placeholder="Password123!"
              title="Valid format: at least 4 characters, 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character"
              minLength="4"
              maxLength="8"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input 
              required 
              className="form-control" 
              name="confirm-password" 
              type={showPasswords ? "text" : "password"} 
              id="confirm-password" 
              placeholder="Password123!"
              title="Must match the password above"
              minLength="4"
              maxLength="8"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            {error && <div className="error-message">{error}</div>}
            {!passwordMatch && <div className="error-message">Passwords do not match</div>}
          </div>
          <div className="form-group">
            <input 
              type="checkbox" 
              id="show-passwords" 
              checked={showPasswords} 
              onChange={toggleShowPasswords} 
            />
            <label htmlFor="show-passwords">Show Passwords</label>
          </div>
          <button className="btn-donate" onClick={handleSubmit} disabled={!isFormValid}>
            <Link to={"/Home"} className='signin'>Register</Link>
          </button>
        </div>
        <Link to={"/Login"} className='top3'>I already have an account</Link>
      </div>
    </div>
  );
}

export default Signup;



