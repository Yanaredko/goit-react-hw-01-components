import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../components/styles/FriendList.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.friendItem} key={id}>
          <span
            className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}
          ></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.friendName}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
