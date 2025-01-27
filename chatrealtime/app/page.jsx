"use client";

import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
        Chat, llamadas, notas de voz libre por 5 minutos.
      </Typography>
      <Typography variant="h6" gutterBottom>
        ¡Pruébalo!
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: "primary.main",
          color: "#fff",
          "&:hover": { bgcolor: "primary.dark" },
        }}
        onClick={() => router.push("/registrer")} // Redirigir al registro
      >
        Regístrate
      </Button>
    </Box>
  );
}
