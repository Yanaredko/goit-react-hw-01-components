export const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  h1: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
};

export const profileStyles = {
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  tag: {
    fontSize: '16px',
    color: '#555',
    marginTop: '4px',
  },
  location: {
    fontSize: '16px',
    color: '#777',
  },
};

export const statisticsStyles = {
  statistics: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  stats: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
  },
  statsItem: {
    marginRight: '20px',
    fontSize: '16px',
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  quantity: {
    fontWeight: 'bold',
  },
};

export const friendListStyles = {
  friendList: {
    listStyle: 'none',
    padding: 0,
  },
  friendItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  status: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  online: {
    backgroundColor: 'green',
  },
  offline: {
    backgroundColor: 'red',
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  friendName: {
    fontSize: '16px',
    color: '#333',
  },
};
