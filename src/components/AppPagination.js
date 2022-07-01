import React from "react";
import { Pagination } from "@mui/material";


function AppPagination({ handleChange, count }) {
 
 

  return (
    <Pagination
      count={count}
      onChange={handleChange}
      color="error"
      sx={{ display: "flex", justifyContent: "center" }}
    />
  );
}

export default AppPagination;
