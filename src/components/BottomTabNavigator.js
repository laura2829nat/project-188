import React from 'react';
import { Link } from 'react-router-dom';
import './BottomTabNavigator.css';

function BottomTabNavigator() {
  return (
    <div className="bottom-tab-navigator">
      <Link to="/" className="tab-link">Home</Link>
      <Link to="/profile" className="tab-link">Profile</Link>
    </div>
  );
}

export default BottomTabNavigator;
