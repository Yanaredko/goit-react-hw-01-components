import React from 'react';
import user from '../data/user.json'; 

import Profile from './Profile.jsx'; 

const App = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default App;
