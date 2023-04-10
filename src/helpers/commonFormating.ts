import { bookItem } from "../types/googleApiTypes";

export const displayTitle = (item: bookItem): string => {
  return item.volumeInfo.title ? item.volumeInfo.title : "";
};

export const displayAuthors = (item: bookItem): string[] => {
  return item.volumeInfo.authors ? Object.values(item.volumeInfo.authors) : [];
};

export const displayCategories = (item: bookItem): string[] => {
  return item.volumeInfo.categories
    ? Object.values(item.volumeInfo.categories)
    : [];
};

export const displayDescription = (item: bookItem): string => {
  return item.volumeInfo.description ? item.volumeInfo.description : "";
};

export const displayComma = (item: bookItem, index: number): string => {
  return Array.isArray(displayAuthors(item)) &&
    index !== displayAuthors(item).length - 1
    ? ", "
    : null;
};

export const displaySmallCoverImage = (item: bookItem): string => {
  return item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
    ? item.volumeInfo.imageLinks.thumbnail
    : null;
};
