import React from "react";
import { useForm } from "react-hook-form";
import {
  Typography,
  InputAdornment,
  IconButton,
  Stack,
  Alert,
  Avatar,
  Button,
  Modal,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { Box } from "@mui/system";
import FormProvider from "./FormProvider";
import FTextField from "./FTextField";

function LogInForm({ open, handleClose }) {
  const defaultValues = {
    username: "krystalmai",
    password: "123456",
  };

  const methods = useForm({ defaultValues });

  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", { message: "Server Response Error" });
  };

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
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Stack direction="row" justifyContent="center">
        <Avatar sx={{ bgcolor:"error.main" }}>
          <LockIcon />
        </Avatar>
        </Stack>
        
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ color: "text.primary" }}
          m={3}
        >
          Log In
        </Typography>

        <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
            <FTextField name="username" label="Username" />
            <FTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LoadingButton
              fullWidth
              variant="contained"
              size="large"
              color="error"
              loading={isSubmitting}
            >
              Sign In
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Box>
    </Modal>
  );
}

export default LogInForm;
