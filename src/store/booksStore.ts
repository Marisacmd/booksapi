import { observable, action, makeObservable } from "mobx";
import { queryProperties } from "../types/commonTypes";
import booksApi from "../api/booksApi";
import { QueryObject } from "../types/apiTypes";
import { bookItem } from "../types/googleApiTypes";
import { AxiosError, AxiosResponse } from "axios";

class BooksSearchStore {
  defaultQuery = {
    searchTerm: "",
    category: "",
    sort: "Relevance",
  };

  public books: bookItem[] = [];
  public isLoadingBooks: boolean = false;
  public page: number = 1;
  public query: queryProperties = this.defaultQuery;
  public numberOfBooksFound: number = 0;
  public errorMessage: string | null = null;
  public noResultsFoundMessage: string = "No results found";
  public showNoResultsFound: boolean = false;

  constructor() {
    makeObservable(this, {
      books: observable,
      isLoadingBooks: observable,
      page: observable,
      query: observable,
      numberOfBooksFound: observable,
      errorMessage: observable,
      noResultsFoundMessage: observable,
      showNoResultsFound: observable,
      getBooks: action.bound,
      increasePage: action.bound,
      resetDefault: action.bound,
      updateQuery: action.bound,
      updateStatistics: action.bound,
      setErrorMessage: action.bound,
    });
  }

  async getBooks(query: QueryObject): Promise<AxiosResponse | AxiosError> {
    this.isLoadingBooks = true;
    const res = (await booksApi.getBooks(query)) as AxiosResponse;
    if (res.data) {
      res.data.items
        ? this.books.push(...res.data.items)
        : (this.showNoResultsFound = true);
      this.isLoadingBooks = false;
      this.updateStatistics();
      return res.data.items;
    } else {
      this.isLoadingBooks = false;
      this.setErrorMessage((res as unknown as AxiosError).message);
    }
  }

  increasePage() {
    this.page = this.page + 1;
  }

  resetDefault() {
    this.setErrorMessage(null);
    this.page = 1;
    this.books = [];
    this.numberOfBooksFound = this.books.length;
    this.showNoResultsFound = false;
  }

  updateQuery(name: string, value: string) {
    this.query[name] = value;
  }

  updateStatistics() {
    this.numberOfBooksFound = this.books.length;
    console.log(this.numberOfBooksFound);
  }

  setErrorMessage(value: string) {
    this.errorMessage = value;
  }
}

const booksSearchStore = new BooksSearchStore();
export default booksSearchStore;
