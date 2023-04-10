import React from "react";
import booksStore from "../../store/booksStore";
import { observer } from "mobx-react";
import BookItem from "./BookItem/BookItem";
import { Button, Grid } from "@mui/material";
import { bookItem } from "../../types/googleApiTypes";

const BooksList: React.FC = () => {
  const getMoreResults: () => void = () => {
    booksStore.increasePage();
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        {booksStore.books.map((item: bookItem, index: number) => (
          <BookItem item={item} index={index} />
        ))}
      </div>
      {booksStore.books.length > 0 ? (
        <Button variant="contained" onClick={getMoreResults}>
          Load more
        </Button>
      ) : null}
    </Grid>
  );
};

export default observer(BooksList);
