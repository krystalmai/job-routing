import React from "react";
import { useForm } from "react-hook-form";
import {
  Typography,
  Stack,
  Alert,
  Avatar,
  Modal,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";

import { Box } from "@mui/system";
import FormProvider from "./FormProvider";
import FTextField from "./FTextField";
import SignInButton from "./SignInButton";
import { useAuth } from "../../helpers/Context";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";

function LogInForm() {
  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: 400,
    bgcolor: "#343434",
    boxShadow: 24,
    p: 4,
  };
  
  
  const defaultValues = {
    username: "krystalmai",
    password: "123456",
  };

  const methods = useForm({ defaultValues });
 
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const handleClose = () => navigate(-1);
  const auth = useAuth();
  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  console.log(from)

  const onSubmit = (data) => {
  
    let username = data.username;
    auth.signIn(username, () => {
      navigate(from, { replace: true });
    });
  };
  return (
    <Modal open={true} onClose={handleClose}>
      <Box sx={style}>
        <Stack alignItems="center" justifyContent="center">
          <Avatar sx={{ bgcolor: "error.main" }}>
            <LockIcon />
          </Avatar>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ color: "text.primary" }}
            m={3}
          >
            Log In
          </Typography>
        </Stack>

        <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
            <FTextField name="username" label="Username" />
            <PasswordInput />

            <SignInButton isSubmitting={isSubmitting}/>

            
          </Stack>
        </FormProvider>
      </Box>
    </Modal>
  );
}

export default LogInForm;
