import { Grid } from "@mui/material";
import React from "react";
import JobCard from "./JobCard";

function JobCardGrid({ jobsArr }) {
  return (
    <Grid
      container
      maxWidth={1200}
      spacing={{ xs: 1, md: 2 }}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      margin={1}
      p={5}
    >
      {jobsArr.map((job) => (
        <Grid
          display="flex"
          justifyContent="center"
          key={job.id}
          item
          xs={12}
          md={4}
        >
          <JobCard job={job} key={job.id} />
        </Grid>
      ))}
    </Grid>
  );
}

export default JobCardGrid;
