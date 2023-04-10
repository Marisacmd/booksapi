import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import { cardItem } from "../../types/commonTypes";
import styles from "./styles.module.scss";

const Book: React.FC = () => {
  const { state } = useLocation();

  const item: cardItem = state.item;

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Grid container spacing={2} direction="row" className={styles.viewBook}>
      <Grid xs={4}>
        {loading ? <CircularProgress /> : null}{" "}
        <img
          src={`https://books.google.com/books/publisher/content/images/frontcover/${item.id}?fife=w400-h600&source=gbs_api`}
          alt={"logo"}
          onLoad={(e) => {
            setLoading(false);
          }}
        />
      </Grid>
      <Grid xs={6}>
        <Typography variant={"h3"}>{item.title}</Typography>
        <div className={styles.authors}>
          {" "}
          {item.authors.length > 0 ? "by" : null} {item.authors}
        </div>
        <div>
          <text className={styles.categories}>categories:</text>
          {""}
          {item.categories}
        </div>
        <Divider />
        <div className={styles.description}>{item.description}</div>
      </Grid>
    </Grid>
  );
};

export default Book;
