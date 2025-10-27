import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import "./login.css";

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setProfilePic(null);
      setFileName('');
      setFileError('');
      return;
    }

    const allowed = ['image/jpeg', 'image/png', 'image/gif'];

    if (!allowed.includes(file.type)) {
      setProfilePic(null);
      setFileName('');
      setFileError('Only JPEG, PNG or GIF images are allowed.');
      return;
    }

    const maxBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > maxBytes) {
      setProfilePic(null);
      setFileName('');
      setFileError('File is too large (max 5MB).');
      return;
    }

    setProfilePic(file);
    setFileName(file.name);
    setFileError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }

    try {
      const loginResult = await login(email, password);
      console.log('Login successful:', loginResult);
      
      if (profilePic) {
        const formData = new FormData();
        formData.append('profilePicture', profilePic);

        const response = await fetch('http://localhost:5000/api/auth/update-profile-picture', {
          method: 'POST',
          credentials: 'include',
          body: formData
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to upload profile picture');
        }
      }

      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="text_area">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="text_input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="text_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text_area file-area">
            <label className="file-label" htmlFor="profilePic">
              Upload Profile Picture (JPEG/PNG/GIF)
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            {fileName && <div className="file-info">Selected: {fileName}</div>}
            {fileError && <div className="file-error">{fileError}</div>}
          </div>

          <input
            type="submit"
            value="LOGIN"
            className="btn"
          />
        </form>
        <a className="link" href="/signup">Sign Up</a>
      </div>
    </div>
  );
}

export default Signin;