import { useContext } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { PersonalContext } from "../Hooks/Context/PersonalDetails/CreatePersonalContext";
import { AddressContext } from "../Hooks/Context/AddressDetails/CreateAddressContext";

const Preview = () => {
  const navigate = useNavigate();

  const { personalState } = useContext(PersonalContext);
  const { addressState } = useContext(AddressContext);

  const handleFinalSubmit = () => {
    const finalData = {
      personal: personalState,
      address: addressState,
    };

    console.log("✅ FINAL SUBMITTED DATA:", finalData);
    alert("Form Submit Successfully");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: 480,
          borderRadius: 4,
          p: 4,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          mb={3}
        >
          Preview & Confirm
        </Typography>

        {/* PERSONAL INFO */}
        <Chip label="Personal Information" color="primary" sx={{ mb: 1 }} />
        <Divider sx={{ mb: 2 }} />

        <Stack spacing={1.2} sx={{ mb: 3 }}>
          <Typography>
            <strong>First Name:</strong> {personalState.firstName}
          </Typography>
          <Typography>
            <strong>Last Name:</strong> {personalState.lastname}
          </Typography>
          <Typography>
            <strong>Phone:</strong> {personalState.phone}
          </Typography>
          <Typography>
            <strong>Email:</strong> {personalState.email}
          </Typography>
        </Stack>

        {/* ADDRESS INFO */}
        <Chip label="Address Information" color="secondary" sx={{ mb: 1 }} />
        <Divider sx={{ mb: 2 }} />

        <Stack spacing={1.2}>
          <Typography>
            <strong>City:</strong> {addressState.city}
          </Typography>
          <Typography>
            <strong>State:</strong> {addressState.state}
          </Typography>
          <Typography>
            <strong>PIN Code:</strong> {addressState.pin}
          </Typography>
        </Stack>

        {/* ACTION BUTTONS */}
        <Stack direction="row" spacing={2} mt={4}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 3,
              fontWeight: 600,
            }}
            onClick={() => navigate("/addressinfo")}
          >
            Back
          </Button>

          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 3,
              fontWeight: 600,
              background:
                "linear-gradient(135deg, #16a34a, #22c55e)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #15803d, #16a34a)",
              },
            }}
            onClick={handleFinalSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Preview;
