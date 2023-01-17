export const loadDataLs = () => {
  const data = localStorage.getItem('library');
  if (data) {
    const library = JSON.parse(data);
    return library;
  }
  return [];
};

export const saveDataLs = (library) => {
  const libraryStringify = JSON.stringify(library);
  localStorage.setItem('library', libraryStringify);
};
