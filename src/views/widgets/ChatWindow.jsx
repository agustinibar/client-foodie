import React, { useEffect, useState } from 'react'
import { Box, Typography, IconButton, Paper, Input, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from 'react-redux';
import { db } from '../../firebase/config';
import { addDoc, collection, query, where, onSnapshot, orderBy, getDocs } from 'firebase/firestore';

const messageRef = collection(db, "messages");

export const ChatWindow = ({ friend, onClose }) => {
    const [chatMessages, setChatMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector((state)=> state.user)

    const handleSnapshot = async() => {
        const q = query(
            messageRef,
            where('senderId', 'in', [user._id, friend.friendId]),
            orderBy('timestamp')
          );
      console.log(q)
          const querySnapshot = await getDocs(q);
          const messages = [];
          querySnapshot.forEach((doc) => {
            messages.push({ id: doc.id, ...doc.data() });
          });

        setChatMessages(messages);
    };

    useEffect(()=>{
        const q = query(
            messageRef,
            where('senderId', 'in', [user._id, friend.friendId]), 
            orderBy('timestamp') 
          );
        const unsubscribe = onSnapshot(q, handleSnapshot);

        return () => {
            unsubscribe();
          };
    },[]);

    const handleSendMessage = async() => {
        if (newMessage.trim() !== "") {
        const message = {
            text: newMessage,
            sender: user.firstName,
            senderId: user._id,
            to: friend.friendId,
            timestamp: new Date()
    };

      await addDoc(messageRef, message);

      setChatMessages([...chatMessages, message]);
      setNewMessage("");
    }
  };

  return (
    <Paper
       elevation={3}
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        maxHeight: '80vh',
        overflow: 'auto',
      }}
    >
      <Box p={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">{friend.name}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            maxHeight: "300px",
            overflow: "auto",
          }}
        >
          {/* Contenido del chat */}
          {chatMessages.map((message, index) => (
            <div key={index}>
              <Typography variant="body1">
                {message.sender}: {message.text}
              </Typography>
            </div>
          ))}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              fullWidth
              placeholder="Escribe un mensaje..."
            />
          </Grid>
          <Grid item xs={3}>
            <IconButton onClick={handleSendMessage} color="primary">
              Enviar
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
