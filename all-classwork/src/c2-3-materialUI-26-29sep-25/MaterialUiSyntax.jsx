// basic syntax for reference:

import { Button, Typography, Container, TextField } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

function MaterialUiSyntax() {
  return (
    <Container style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Material UI 🚀
      </Typography>

      <TextField
        label="Enter your name"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={() => alert("Hello from MUI!")}
      >
        Click Me
      </Button>
    </Container>
  );
}

export default MaterialUiSyntax;

