export const filterItems = (searchTerm: string, array: any[]) => {
  return array.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
};