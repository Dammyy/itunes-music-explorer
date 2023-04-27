export const createQueryString = (searchTerm: string) =>
  `?${new URLSearchParams({ term: searchTerm }).toString()}`
