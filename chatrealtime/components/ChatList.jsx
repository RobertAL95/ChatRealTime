"use client";

import { List, ListItem, ListItemText, Divider } from "@mui/material";

export default function ChatList({ chats, onSelectChat }) {
  return (
    <List
      sx={{
        width: { xs: "100%", md: "300px" },
        bgcolor: "background.paper",
        height: "100vh",
        overflow: "auto",
      }}
    >
      {chats.map((chat, index) => (
        <div key={index}>
          <ListItem
            button
            onClick={() => onSelectChat(chat)}
            sx={{
              "&:hover": {
                bgcolor: "primary.main",
              },
            }}
          >
            <ListItemText
              primary={chat.name}
              secondary={chat.lastMessage}
              primaryTypographyProps={{ color: "text.primary" }}
              secondaryTypographyProps={{ color: "text.secondary" }}
            />
          </ListItem>
          <Divider sx={{ bgcolor: "text.secondary" }} />
        </div>
      ))}
    </List>
  );
}
