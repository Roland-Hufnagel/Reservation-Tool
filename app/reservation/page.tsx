"use client";

import { Box, Button, TextField } from "@mui/material";

export default function ReservationPage() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="date"
        label="Datum"
        type="date"
        slotProps={{ inputLabel: { shrink: true } }}
        name="date"
      />
      <TextField
        slotProps={{ inputLabel: { shrink: true } }}
        id="time"
        label="Uhrzeit"
        variant="outlined"
        type="time"
        name="time"
      />
      <TextField
        id="numberOfGuests"
        label="Anzahl der Gäste"
        variant="outlined"
        type="number"
        name="numberOfGuests"
      />
      <TextField id="name" label="Name" variant="outlined" name="name" />
      <TextField
        id="phone"
        label="Telefonnummer"
        variant="outlined"
        type="tel"
        name="phone"
      />
      <Button type="submit" variant="contained">
        Reservieren
      </Button>
    </Box>
  );
}
