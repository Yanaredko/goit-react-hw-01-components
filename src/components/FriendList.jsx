import React from 'react';
import { friendListStyles } from './styles';

const FriendList = ({ friends }) => {
  return (
    <ul style={friendListStyles.friendList} className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="friend-item" key={id}>
          <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
