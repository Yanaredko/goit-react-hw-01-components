import React from 'react';
import user from '../data/user.json'; 
import data from '../data/data.json'; 
import friends from '../data/friends.json'; 
import transactions from '../data/transactions.json'; 

import Profile from './Profile.jsx'; 
import Statistics from './Statistics.jsx';
import FriendList from './FriendList.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import {styles} from './styles.js'; 

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
        style={styles.profile}
      />

      <Statistics title="Upload stats" stats={data}  />
      <FriendList friends={friends}  />
      <TransactionHistory items={transactions}  />
    </div>
  );
};

export default App;

