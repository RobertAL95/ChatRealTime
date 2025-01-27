"use client";

import { useState, useEffect } from "react";
import { Box, Drawer, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatList from "../../components/ChatList";
import ChatWindow from "../../components/ChatWindow";
import chatsData from "../../app/data/chats.json";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null); // Chat seleccionado
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chats"));
    if (!storedChats || storedChats.length === 0) {
      localStorage.setItem("chats", JSON.stringify(chatsData));
      setChats(chatsData); // Cargar datos iniciales desde el archivo JSON
    } else {
      setChats(storedChats); // Usar datos existentes en localStorage
    }
  }, []);

  const handleChatSelect = (chat) => setSelectedChat(chat);

  return (
    <Box display="flex" height="100vh" sx={{ bgcolor: "background.default" }}>
      {/* Lista de chats */}
      <ChatList chats={chats} onSelectChat={handleChatSelect} />

      {/* Ventana de chat para pantallas grandes */}
      <Box flex={1} display={{ xs: "none", md: "block" }}>
        {selectedChat ? (
          <ChatWindow chat={selectedChat} />
        ) : (
          <Typography variant="h6" align="center" sx={{ color: "text.secondary", mt: 2 }}>
            Selecciona un chat
          </Typography>
        )}
      </Box>

      {/* Drawer emergente para móviles */}
      <Drawer
        anchor="right"
        open={!!selectedChat}
        onClose={() => setSelectedChat(null)}
        sx={{
          display: { xs: "block", md: "none" },
          ".MuiDrawer-paper": {
            width: "100%",
            bgcolor: "background.default",
          },
        }}
      >
        <Box p={2}>
          <IconButton onClick={() => setSelectedChat(null)} sx={{ color: "text.primary" }}>
            <CloseIcon />
          </IconButton>
          {selectedChat && <ChatWindow chat={selectedChat} />}
        </Box>
      </Drawer>
    </Box>
  );
}
