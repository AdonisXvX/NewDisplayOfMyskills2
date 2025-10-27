import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './UserStats.css';

export default function UserStats() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    if (user) {
      setShowDropdown(!showDropdown);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = async (e) => {
    e.stopPropagation();
    await logout();
    setShowDropdown(false);
    navigate('/');
  };

  const getInitial = () => {
    if (!user) return 'N';
    return user.email[0].toUpperCase();
  };

  const getTooltip = () => {
    if (!user) return 'New User';
    return user.email;
  };

  return (
    <div className="user-stats" onClick={handleClick} role="button" tabIndex={0}>
      <div className="avatar-wrapper">
        {user?.profilePicture ? (
          <img 
            src={user.profilePicture} 
            alt="Profile" 
            className="user-avatar-image" 
            data-tooltip={getTooltip()} 
          />
        ) : (
          <div className="user-avatar" data-tooltip={getTooltip()}>
            {getInitial()}
          </div>
        )}
        <div 
          className="status-indicator" 
          title={user ? 'Online' : 'Sign in'} 
        />
      </div>
      <span className="user-status">
        {user ? user.email : 'Sign in'}
      </span>

      {showDropdown && user && (
        <div className="user-dropdown">
          <button onClick={handleLogout} className="dropdown-item">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}