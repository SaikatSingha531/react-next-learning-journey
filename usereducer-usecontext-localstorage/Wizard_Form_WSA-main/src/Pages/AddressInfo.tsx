import DynamicInput from "../Components/DynamicInput";
import { useForm } from "react-hook-form";
import { AddressSchima } from "../Services/Validation/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Box, Paper, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useContext } from "react";
import { AddressContext } from "../Hooks/Context/AddressDetails/CreateAddressContext";
import bg from "../assets/formBG.jpg";
import type {
  AddressContextType,
  AddressFormData,
} from "../Typescript/Interface";

const backgroundImage = bg;

const AddressInfo = () => {
  const navigate = useNavigate();

  const { handleAddressDispatch } =
    useContext<AddressContextType>(AddressContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: yupResolver(AddressSchima),
    defaultValues: {
      city: "",
      state: "",
      pin: "",
    },
  });

  const onSubmit = (data: AddressFormData) => {
    handleAddressDispatch(data);
    navigate("/preview");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Paper
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom={false}
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: 3,
            textShadow: "0 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Address Details
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Stack spacing={2} alignItems="center">
            <DynamicInput
              name="city"
              label="Enter City Name"
              type="text"
              register={register}
              error={errors.city}
            />

            <DynamicInput
              name="state"
              label="Enter State Here"
              type="text"
              register={register}
              error={errors.state}
            />

            <DynamicInput
              name="pin"
              label="PIN Code"
              type="text"
              register={register}
              error={errors.pin}
            />

            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              <Button
                type="button"
                onClick={() => navigate("/")}
                variant="contained"
                sx={{
                  width: "80px",
                  height: "40px",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                }}
              >
                <GrFormPreviousLink />
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "80px",
                  height: "40px",
                  backgroundColor: "#d32f2f",
                  color: "#fff",
                }}
              >
                <GrFormNextLink />
              </Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default AddressInfo;
