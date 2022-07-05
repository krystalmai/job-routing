import React from "react";
import { useForm } from "react-hook-form";
import {
  Typography,
  InputAdornment,
  IconButton,
  Stack,
  Alert,
  Avatar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { Box } from "@mui/system";
import FormProvider from "./FormProvider";
import FTextField from "./FTextField";

function LogInForm() {
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

  return (
    <Box>
      <Avatar>
        <LockIcon />
      </Avatar>
      <Typography variant="h4" textAlign="center" mb={3}>
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

          <LoadingButton fullWith size="large" loading={isSubmitting}>
            Sign In
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Box>
  );
}

export default LogInForm;
