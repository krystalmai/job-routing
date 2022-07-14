import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getJobs } from "../../helpers/jobs";

import AppPagination from "./AppPagination";
import JobCard from "./JobCard";

function JobCardGrid() {
  const [jobs, setJobs] = useState(null);
  const [jobsArr, setJobsArr] = useState(null);
  const pageSize = 9;

  useEffect(() => {
    async function processJobsData() {
      if (!jobs) {
        let jobs = await getJobs();
        setJobs(jobs);
        setJobsArr(jobs.slice(0, pageSize));
      }
    }

    processJobsData();
  }, [jobs]);

  const handleChange = (event, page) => {
    let from = (page - 1) * pageSize;
    let to = (page - 1) * pageSize + pageSize;
    setJobsArr(jobs.slice(from, to));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {jobs && jobsArr ? (
        <>
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
          <AppPagination
            handleChange={handleChange}
            count={Math.ceil(jobs.length / pageSize)}
          />
        </>
      ) : (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 0%)",
          }}
        />
      )}

      <Outlet />
    </Box>
  );
}

export default JobCardGrid;
