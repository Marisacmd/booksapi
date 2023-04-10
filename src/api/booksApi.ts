import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL, MAX_RESULTS } from "../config/constants";
import { QueryObject } from "../types/apiTypes";

const booksApi = {
  async getBooks(queryObject: QueryObject) {
    const { searchTerm, category, page, sort } = queryObject;
    const startIndex: number = page === 1 ? page : MAX_RESULTS * (page - 1) + 1;

    const response: AxiosResponse | AxiosError = await axios
      .get(
        `${BASE_URL}?q=${searchTerm}+subject:${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=${process.env.REACT_APP_API_KEY}`
      )
      .catch(function (error: AxiosError) {
        return error;
      });

    return response;
  },
};

export default booksApi;
