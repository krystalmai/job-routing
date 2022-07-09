import React, { useState, useEffect } from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import AppPagination from "./components/AppPagination";
import apiService from "./app/apiService";
import JobCardGrid from "./components/JobCardGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import LogInForm from "./components/LogInForm";
import { BASE_URL } from "./app/config";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [jobs, setJobs] = useState(null);
  const [jobsArr, setJobsArr] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  useEffect(() => {
    const getJobs = async () => {
      try {
        let jobs = await apiService.get("/jobs");
        setJobs(jobs.data);
        setJobsArr(jobs.data.slice(0, 5));
        
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);
   
  console.log(jobs);
  console.log(jobsArr);
  const pageSize = 5;

  const handleChange = (event, page) => {
    let from = (page - 1) * pageSize;
    let to = (page - 1) * pageSize + pageSize;
    setJobsArr(jobs.slice(from, to));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Paper sx={{ pb: 10, m: 0 }}>
          <SearchAppBar isSignedIn={isSignedIn} handleOpen={handleOpen} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <JobCardGrid jobsArr={jobsArr} />
            <AppPagination
              handleChange={handleChange}
              count={Math.ceil(jobs.length / pageSize)}
            />
          </Box>
          <LogInForm open={open} handleClose={handleClose} />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
