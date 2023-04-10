export type queryProperties = {
  searchTerm: string;
  category: string;
  sort: string;
};

export type cardItem = {
  id: number;
  title: string;
  authors: string[];
  categories: string[];
  description: string;
};
