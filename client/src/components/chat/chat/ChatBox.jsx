
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Box } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider.jsx';
import ChatHeader from './ChatHeader.jsx';
import Messages from './Messages.jsx';
import { getConversation } from '../../../service/api.js';

const ChatBox = () => {

  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
      const getConversationDetails = async () => {
        let data = await getConversation({ senderId: account.sub, receiverId: person.sub});
        setConversation(data);
      }
      getConversationDetails();
  }, [person.sub]);
  

  return (
    <>
      <Box>
        <ChatHeader person={person} />
        <Messages person={person} conversation={conversation}/>
      </Box>
    </>
  )
}

export default ChatBox;