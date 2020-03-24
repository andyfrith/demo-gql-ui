// import React, { useCallback, useContext } from 'react';
// // import * as queryString from 'query-string';
// import { sdk } from '../../graphql/sdk';
// // import { UserContext } from '../../userContext';
// import { IconButton, Menu, MenuItem } from '@material-ui/core';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// export const GreetingButton: React.FC = () => {
//   const [anchorEl, setAnchorEl] = React.useState<any>(null);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const logout = useCallback(() => {
//     // const { code } = queryString.parse(window.location.search);
//     sdk
//       .GetGreeting({ input: { id: '1' } })
//       .then(data => {
//         console.log('data', data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }, []);

//   return (
//     <>
//       <IconButton
//         color="inherit"
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <AccountCircleIcon />
//       </IconButton>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={logout}>Logout</MenuItem>
//       </Menu>
//     </>
//   );
// };

import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import { sdk } from '../../graphql/sdk';

export const GreetingButton: React.FC = () => {
  const useStyles = makeStyles(theme => ({
    avatar: {
      height: 250,
      width: 250,
    },
  }));
  const classes = useStyles();

  const getGreeting = () => {
    // const { code } = queryString.parse(window.location.search);
    sdk
      .GetGreeting({ input: { id: '1' } })
      .then(data => {
        console.log('data', data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <IconButton onClick={getGreeting}>
        <Avatar alt="Al Pacino" src="/scarface-1.jpg" className={classes.avatar} />
      </IconButton>
    </>
  );
};
