import DynamicInput from "../Components/DynamicInput";
import { useForm } from "react-hook-form";
import { PersonalSchima } from "../Services/Validation/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Box, Paper, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { useContext } from "react";
import bg from "../assets/formBG.jpg";
import { PersonalContext } from "../Hooks/Context/PersonalDetails/CreatePersonalContext";
import type {
  PersonalContextType,
  PersonalFormData,
} from "../Typescript/Interface";

const backgroundImage = bg;

const PersonalInfo = () => {
  const navigate = useNavigate();

  const { handleAddPerosnalDetails } =
    useContext<PersonalContextType>(PersonalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalFormData>({
    resolver: yupResolver(PersonalSchima),
    defaultValues: {
      fName: "",
      lName: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = (data: PersonalFormData) => {
    handleAddPerosnalDetails(data);
    navigate("/addressinfo");
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
          Personal Information
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Stack spacing={2} alignItems="center">
            <DynamicInput
              name="fName"
              label="First Name"
              type="text"
              register={register}
              error={errors.fName}
            />

            <DynamicInput
              name="lName"
              label="Last Name"
              type="text"
              register={register}
              error={errors.lName}
            />

            <DynamicInput
              name="phone"
              label="Phone Number"
              type="text"
              register={register}
              error={errors.phone}
            />

            <DynamicInput
              name="email"
              label="Email"
              type="email"
              register={register}
              error={errors.email}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "150px",
                height: "40px",
                backgroundColor: "#d32f2f",
                color: "#fff",
              }}
            >
              <GrFormNextLink />
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default PersonalInfo;
