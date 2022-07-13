import React from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import JobCardGrid from "./components/JobCardGrid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import LogInForm from "./components/LogInForm";
import { AuthProvider } from "./helpers/Context";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import JobDetails from "./components/JobCardGrid/JobDetails";
import RequireAuth from "./helpers/RequireAuth";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  let location = useLocation();
  let state = location.state;

  return (
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Paper sx={{ height: { md: "100vh" }, pb: 10, m: 0 }}>
            <SearchAppBar />

            <Routes location={state?.backgroundLocation || location}>
              <Route path="/" element={<JobCardGrid />}>
                <Route path="/login" element={<LogInForm />} />
                <Route
                  path="/jobs/:jobId"
                  element={
                    <RequireAuth>
                      <JobDetails />
                    </RequireAuth>
                  }
                />
              </Route>
            </Routes>

            {state?.backgroundLocation && (
              <Routes>
                <Route path="/login" element={<LogInForm />} />
                <Route
                  path="/jobs/:jobId"
                  element={
                    <RequireAuth>
                      <JobDetails />
                    </RequireAuth>
                  }
                />
              </Routes>
            )}

            <Outlet />
          </Paper>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
