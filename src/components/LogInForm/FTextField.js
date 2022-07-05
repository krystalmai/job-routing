import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FTextField = ({ name, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          onError={(!!error)}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}

export default FTextField;