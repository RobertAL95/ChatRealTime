"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, IconButton, Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

export default function ChatWindow({ chat }) {
  const [messages, setMessages] = useState(chat.messages || []);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [...messages, { text: newMessage, fromUser: true }];
      setMessages(updatedMessages);
      setNewMessage("");

      const storedChats = JSON.parse(localStorage.getItem("chats")) || [];
      const updatedChats = storedChats.map((c) =>
        c.name === chat.name ? { ...c, messages: updatedMessages } : c
      );
      localStorage.setItem("chats", JSON.stringify(updatedChats));
    }
  };

  const sendAudio = () => {
    alert("Funcionalidad de enviar audio (prototipo)");
  };

  return (
    <Box display="flex" flexDirection="column" height="100%" sx={{ bgcolor: "background.default" }}>
      <Box flex={1} overflow="auto" p={2}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "text.primary", borderBottom: "1px solid #333", pb: 1 }}
        >
          {chat.name}
        </Typography>
        {messages.map((msg, index) => (
          <Box key={index} display="flex" justifyContent={msg.fromUser ? "flex-end" : "flex-start"} mb={1}>
            {!msg.fromUser && (
              <Avatar
                alt={chat.name}
                src="/default-avatar.png"
                sx={{ width: 32, height: 32, mr: 1 }}
              />
            )}
            <Typography
              sx={{
                display: "inline-block",
                maxWidth: "70%",
                padding: 1,
                borderRadius: 1.5,
                backgroundColor: msg.fromUser ? "primary.main" : "background.paper",
                color: msg.fromUser ? "#fff" : "text.primary",
              }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box display="flex" alignItems="center" sx={{ borderTop: "1px solid #333", p: 1, bgcolor: "background.paper" }}>
        <TextField
          fullWidth
          placeholder="Escribe tu mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          variant="outlined"
          sx={{
            mr: 1,
            "& .MuiOutlinedInput-root": {
              bgcolor: "background.default",
              "& fieldset": { borderColor: "#333" },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={sendMessage}
          sx={{
            mr: 1,
            bgcolor: "primary.main",
            color: "#fff",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          Enviar
        </Button>
        <IconButton
          color="primary"
          onClick={sendAudio}
          sx={{
            bgcolor: "primary.main",
            color: "#fff",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          <MicIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

