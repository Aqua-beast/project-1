import React from 'react';

function Tracker() {
  return (
    <div className="container">
      <div className="overview">
        <div className="tracker">
          <div className="tracker-content">
            <p>PENDING TRACKERS</p>
            <h3>45/60</h3>
          </div>
          <div className="icon">
            <i className="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div className="pending-review">
          <div className="tracker-content">
            <p>PENDING REVIEWS</p>
            <h3>3</h3>
          </div>
          <div className="icon">
            <i className="fa-regular fa-bookmark"></i>
          </div>
        </div>
      </div>
      <div className="searchbox">
        <i className="fa-regular fa-bookmark"></i>
        <input type="text" placeholder="Search for a business unit" />
      </div>
    </div>
  );
}

export default Tracker;
