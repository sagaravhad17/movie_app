import React from "react";
// import  from "@mui/material";
import {createTheme, Pagination, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    primary:{
        main: '#fff',
        contrastText: 'white'
      }
  },
});
const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          variant = "outlined"
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
