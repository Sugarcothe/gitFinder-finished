import React from 'react';
import UserItem from './UserItem';
// import Spin from '../images/'
import PropTypes from 'prop-types';




const Users = ({ users, loading }) => {
    return (
      <div className='userStyle'>
        {users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }

  Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.array.isRequired,

  }
  



export default Users
