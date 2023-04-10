import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  displayAuthors,
  displayCategories,
  displayComma,
  displayDescription,
  displaySmallCoverImage,
  displayTitle,
} from "../../../helpers/commonFormating";
import { BookItemProps } from "../../../types/BookItemProps";
import styles from "./styles.module.scss";

const BookItem = (props: BookItemProps) => {
  const navigate = useNavigate();

  const { item, index } = props;

  const [loading, setLoading] = useState<boolean>(true);

  const handleOpenItem: () => void = () => {
    navigate(`/book/${index}`, {
      state: {
        item: {
          id: item.id,
          title: displayTitle(item),
          authors: displayAuthors(item),
          categories: displayCategories(item),
          description: displayDescription(item),
        },
      },
    });
  };

  return (
    <Card className={styles.bookItem}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        onClick={handleOpenItem}
      >
        <Grid className={styles.bookItemInfo} item xs={2}>
          {loading ? <CircularProgress /> : null}
          <img
            src={displaySmallCoverImage(item)}
            onLoad={(e: SyntheticEvent) => {
              setLoading(false);
            }}
            alt="bookCover"
          />
        </Grid>
        <Grid className={styles.bookItemInfo} item xs={10}>
          <Typography variant="h5">{item.volumeInfo.title}</Typography>
          <Divider />
          <text className={styles.cursiveText}>
            {displayAuthors(item).length > 0 ? "by" : null}{" "}
          </text>
          {displayAuthors(item).map((name: string, index: number) => (
            <text className={styles.cursiveText}>
              {name}
              {displayComma(item, index)}
            </text>
          ))}
          <div className={styles.categoriesTitle}>
            <text className={styles.boldText}>categories: </text>
            {displayCategories(item).map((item: string) => (
              <text>{item}</text>
            ))}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BookItem;
