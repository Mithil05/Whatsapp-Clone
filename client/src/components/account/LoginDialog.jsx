
import React from 'react';
import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data.js';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider.jsx';
import { addUser } from '../../service/api.js';

const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCOde = styled('img')({
  margin: '50px 0 0 50px',
  height: 264,
  width: 264
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
  marginTop: '12%',
  height: '95%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'
}

const LoginDialog = () => {

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log('Login Failed', res);
  };

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
    >
      <Component>
        <Container>
          <Title>Use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
            <ListItem>3. Tap on Link a device</ListItem>
            <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: 'relative'}}>
          <QRCOde src={qrCodeImage} alt="qr code" />
          <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(41%)'}}>
            <GoogleLogin
              buttonText=""
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog