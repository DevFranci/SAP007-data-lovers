// estas funciones son de ejemplo

export const filterDirector = (films, directorName) => {
  return films.filter((film) => film.director === directorName);
};

export const filterProducer = (films, producerName) => {
  return films.filter((film) => film.producer === producerName);
};
export const filterFilm = (films, filmName) => {
  return films.filter(
    (film) => film.title.toLowerCase().indexOf(filmName.toLowerCase()) !== -1
  );
};
export const computeStats = (result, films) => {
  return (result.length / films.length) * 100;
};

export const sortData = (films, sortBy, sortOrder) => {
  return films.sort((film1, film2) => {
    const prop1 =
      isNaN(film1[sortBy]) === true ? film1[sortBy] : parseInt(film1[sortBy]);
    const prop2 =
      isNaN(film2[sortBy]) === true ? film2[sortBy] : parseInt(film2[sortBy]);
    if (sortOrder === "ascending") {
      if (prop1 < prop2) {
        return -1;
      }
      if (prop1 > prop2) {
        return 1;
      }
      return 0;
    }
    //caso decrescente
    if (prop1 < prop2) {
      return 1;
    }
    if (prop1 > prop2) {
      return -1;
    }
    return 0;
  });
};
