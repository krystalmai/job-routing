import React, { useState } from "react";
import "./App.css";
import Paper from "@mui/material/Paper";
// import { grey, deepOrange, amber } from '@mui/material/colors';
import SearchAppBar from "./components/SearchAppBar";
import AppPagination from "./components/AppPagination";
import { jobs } from "./data";
import JobCardGrid from "./components/JobCardGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const [jobsArr, setJobsArr] = useState(jobs.slice(0, 5));
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
          <SearchAppBar />
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
          <JobCardGrid jobsArr={jobsArr}/>
          <AppPagination
            handleChange={handleChange}
            count={Math.ceil(jobs.length / pageSize)}
          />

          </Box>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
