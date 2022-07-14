import React from "react";
import { Chip, Stack } from "@mui/material";
function SkillStack({ skills, total }) {
  return (
    <Stack direction="row" spacing={0.5} justifyContent="center" flexWrap="wrap" rowGap={0.5} my={0.5} >
      {skills.slice(0, total).map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          color="error"
          size="small"
          sx={{ p: 0, fontSize: 12 }}
        />
      ))}
    </Stack>
  );
}

export default SkillStack;
