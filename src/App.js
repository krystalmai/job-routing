import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import AppPagination from "./components/AppPagination";
import axios from "axios";
import { jobs } from "./data";
import JobCardGrid from "./components/JobCardGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import LogInForm from "./components/LogInForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const [jobsArr, setJobsArr] = useState(jobs.slice(0, 5));
  const [isSignedIn, setIsSignedIn] = useState(false);

  // useEffect(() => {
  //   const getJobs = async () => {
  //     try {
  //       const jobs = await axios.get('http://localhost:3004/jobs');
  //       console.log(jobs)
        
  //     } catch (error) {
  //       console.log(error)
  //     }
      
  //   }
  //   getJobs();
  // }, [])
  
  const pageSize = 5;

  const handleChange = (event, page) => {
    let from = (page - 1) * pageSize;
    let to = (page - 1) * pageSize + pageSize;
    setJobsArr(jobs.slice(from, to));
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
      
        <Paper sx={{ pb: 10}}>
          <SearchAppBar isSignedIn={isSignedIn} />
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
          <JobCardGrid jobsArr={jobsArr}/>
          <AppPagination
            handleChange={handleChange}
            count={Math.ceil(jobs.length / pageSize)}
            />
          </Box>
          <LogInForm/>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
