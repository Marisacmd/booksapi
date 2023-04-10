import { useEffect } from "react";
import { reaction } from "mobx";
import { observer } from "mobx-react";
import Select from "../../components/common/Select/Select";
import Input from "../../components/common/Input/Input";
import booksStore from "../../store/booksStore";
import {
  CATEGORY_SELECT_OPTIONS,
  SORT_SELECT_OPTIONS,
} from "../../config/constants";
import { Grid } from "@mui/material";
import styles from "./styles.module.scss";

const SearchForm: React.FC = () => {
  const getBooks: () => void = () => {
    booksStore.getBooks({ ...booksStore.query, page: booksStore.page });
  };

  const handleSearch: () => void = () => {
    booksStore.resetDefault();
    getBooks();
  };

  useEffect(() => {
    reaction(
      () => booksStore.page,
      (page) => getBooks()
    );
  }, []);

  /*  
Можно реализовать, чтобы при изменении типа сортировки обновление списка триггерилось автоматически
useEffect(() => {
    reaction(
      () => booksStore.query.sort,
      () => {
        booksStore.resetDefault();
        getBooks();
      }
    );
  }, []); */

  const changeFilterProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, id, value } = e.target;
    booksStore.updateQuery(id === "searchTerm" ? id : name, value);
  };

  return (
    <Grid direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <Input
          id={"searchTerm"}
          label={"Enter book's name, author's name or other query text..."}
          onChange={changeFilterProperty}
          onClick={handleSearch}
          name={""}
          className={styles.inputQuery}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={styles.selection}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <text className={styles.selectItem}>Categories</text>
            <Select
              labelId={"1"}
              id={"11"}
              value={booksStore.query.category}
              name={"category"}
              onChange={changeFilterProperty}
              items={CATEGORY_SELECT_OPTIONS}
              className={styles.selectComponent}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <text className={styles.selectItem}> Search by </text>
            <Select
              labelId={""}
              id={""}
              value={booksStore.query.sort}
              name={"sort"}
              onChange={changeFilterProperty}
              items={SORT_SELECT_OPTIONS}
              className={styles.selectComponent}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(SearchForm);
