import React from 'react'
import LoginDialog from './account/LoginDialog.jsx';
import { Box, AppBar, Toolbar, styled } from '@mui/material';
import ChatDialog from './chat/ChatDialog.jsx';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider.jsx';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
    background-color: #00bfa5;
    height: 220px;
    box-shadow: none;
`;

const Messenger = () => {

  const {account} = useContext(AccountContext);

  return (
    <Component>
      {
        account ?
        <>
          <Header>
            <Toolbar>

            </Toolbar>
          </Header>
          <ChatDialog />
        </>
        :
        <>
          <LoginHeader>
            <Toolbar>

            </Toolbar>
          </LoginHeader>
          <LoginDialog/>
        </>
      }
    </Component>
  )
}

export default Messenger;