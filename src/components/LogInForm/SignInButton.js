import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

function SignInButton({ isSubmitting }) {
  return (
    <LoadingButton
      fullWidth
      variant="contained"
      size="large"
      color="error"
      loading={isSubmitting}
      type="submit"
    >
      Sign In
    </LoadingButton>
  );
}


export default SignInButton;
