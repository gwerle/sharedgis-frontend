import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface jwtFormat {
  first_name: string;
  last_name: string;
}

const UserMenuAvatar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const getAvatarLetters = () => {
    const token = Cookies.get('token');

    if (token) {
      const tokenDecoded: jwtFormat = jwt_decode(token);

      return `${tokenDecoded.first_name.charAt(
        0,
      )}${tokenDecoded.last_name.charAt(0)}`.toUpperCase();
    }
  };

  const handleClickAvatar = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    Cookies.remove('token');
    history.push('/');
  };

  return (
    <div
      style={{ margin: '20px', display: 'flex', justifyContent: 'flex-end' }}
    >
      <Avatar
        style={{
          backgroundColor: '#27AD5F',
          color: '#FFF',
          padding: '25px',
          cursor: 'pointer',
        }}
        onClick={handleClickAvatar}
      >
        {getAvatarLetters()}
      </Avatar>

      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={logoutUser}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenuAvatar;
