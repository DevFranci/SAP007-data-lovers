import { filterDirector, filterProducer, sortData } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const cardRoot = document.getElementById("root");
const selectDirector = document.getElementById("selectDirector");
const selectProducer = document.getElementById("selectProducer");
const selectSort = document.getElementById("selectSort");
const clearButton = document.getElementById("clearButton");
const inputFilm = document.getElementById("inputFilm");

const createCardFront = (film) => {
  return `
        <section class="card">
            <picture>
                <img src="${film.poster}"/>
            </picture>
        </section>
    `;
};
const createCards = (films) => {
  return films
    .map((film) => {
      return createCardFront(film);
    })
    .join("");
};

window.addEventListener("load", () => {
  cardRoot.innerHTML = createCards(data.films);

  selectDirector.addEventListener("change", () => {
    cardRoot.innerHTML = createCards(
      filterDirector(data.films, selectDirector.value)
    );
  });
  selectProducer.addEventListener("change", () => {
    cardRoot.innerHTML = createCards(
      filterProducer(data.films, selectProducer.value)
    );
  });
  selectSort.addEventListener("change", () => {
    const parameters = selectSort.value.split(",");

    cardRoot.innerHTML = createCards(
      sortData(data.films, parameters[0], parameters[1])
    );
  });
  clearButton.addEventListener("click", () => {
    cardRoot.innerHTML = createCards(data.films);
  });
  inputFilm.addEventListener("keyup", (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      //if (input.value)
    }
  });
});
