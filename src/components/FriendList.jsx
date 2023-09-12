import React from 'react';
import PropTypes from 'prop-types';
import '../components/styles/FriendList.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="friendItem" key={id}>
          <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="friendName">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;

