"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState(""); // Estado para el correo del usuario
  const [inviteEmail, setInviteEmail] = useState(""); // Estado para el correo del invitado
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la espera
  const router = useRouter();

  const handleRegister = async () => {
    if (email.trim() && inviteEmail.trim()) {
      setIsLoading(true); // Activar el estado de carga
      alert(`Código enviado a: ${email} y se ha invitado a: ${inviteEmail}`);

      // Simular espera de 15 segundos
      await new Promise((resolve) => setTimeout(resolve, 15000));

      setIsLoading(false); // Desactivar el estado de carga
      router.push("/chat"); // Redirigir al chat después de la espera
    } else {
      alert("Por favor, ingresa un correo válido para ambos campos.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Ingresa tu correo electrónico
      </Typography>
      <TextField
        label="Tu Correo Electrónico"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          mt: 2,
          width: "300px",
          "& .MuiOutlinedInput-root": {
            bgcolor: "background.paper",
            color: "text.primary",
          },
          "& .MuiInputLabel-root": {
            color: "text.secondary",
          },
        }}
        disabled={isLoading}
      />
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        ¿A quién invitas?
      </Typography>
      <TextField
        label="Correo Electrónico de tu invitado"
        variant="outlined"
        value={inviteEmail}
        onChange={(e) => setInviteEmail(e.target.value)}
        sx={{
          mt: 2,
          width: "300px",
          "& .MuiOutlinedInput-root": {
            bgcolor: "background.paper",
            color: "text.primary",
          },
          "& .MuiInputLabel-root": {
            color: "text.secondary",
          },
        }}
        disabled={isLoading}
      />
      {isLoading ? (
        <Box mt={3} display="flex" flexDirection="column" alignItems="center">
          <CircularProgress />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Esperando aceptación de la invitación...
          </Typography>
        </Box>
      ) : (
        <Button
          variant="contained"
          onClick={handleRegister}
          sx={{
            mt: 3,
            bgcolor: "primary.main",
            color: "#fff",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          Chatear
        </Button>
      )}
    </Box>
  );
}
