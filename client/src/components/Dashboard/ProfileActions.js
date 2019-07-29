import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4 bg-light container bg-dark" role="group">
      <Link to="/edit-basicinfo" className="btn btn-dark">
        <i className="fas fa-user-circle text-info mr-1" />Edit Basic Info
      </Link>
      <Link to="/add-portfolio" className="btn btn-dark">
        <i className="fas fa-user-circle text-info mr-1" />Add Portfolio
      </Link>
      <Link to="/edit-availability" className="btn btn-dark">
        <i className="fas fa-user-circle text-info mr-1" />Edit Availability
      </Link>
      

      <Link to="/edit-profile" className="btn btn-dark">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-dark">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-dark">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;
