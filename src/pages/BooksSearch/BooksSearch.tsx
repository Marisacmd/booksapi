import { observer } from "mobx-react";
import Header from "../../components/Header/Header";
import BooksList from "../../components/BooksList/BooksList";
import { Container, LinearProgress, Typography } from "@mui/material";
import booksSearchStore from "../../store/booksStore";
import styles from "./styles.module.scss";

const BooksSearch: React.FC = () => {
  return (
    <Container className={styles.booksSearch}>
      <Header />
      <Typography variant="h5" align="right">
        Books found: {booksSearchStore.numberOfBooksFound}
      </Typography>
      {booksSearchStore.errorMessage}
      {booksSearchStore.showNoResultsFound
        ? booksSearchStore.noResultsFoundMessage
        : null}
      {booksSearchStore.isLoadingBooks &&
      booksSearchStore.books.length === 0 ? (
        <LinearProgress />
      ) : null}
      <BooksList />
    </Container>
  );
};

export default observer(BooksSearch);
