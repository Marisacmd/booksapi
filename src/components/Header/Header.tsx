import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import { Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" className={styles.header}>
        {" "}
        Search for books
      </Typography>
      <SearchForm />
    </Grid>
  );
};

export default Header;
