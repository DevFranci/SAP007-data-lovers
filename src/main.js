import {
  filterDirector,
  filterProducer,
  sortData,
  filterFilm,
  computeStats,
} from "./data.js";
import data from "./data/ghibli/ghibli.js";

const translate = (text) => {
  switch (text) {
    case "rt_score,ascending":
      return "menor nota";
    case "rt_score,descending":
      return "maior nota";
    case "title,ascending":
      return "Filmes A - Z";
    case "title,descending":
      return "Filmes Z - A";
    case "release_date,descending":
      return "Filmes mais novos";
    case "release_date,ascending":
      return "Filmes mais antigos";
    default:
      return "";
  }
};
const setAggregateCalculateText = (text) => {
  aggregateCalculation.innerHTML = `<p>${text}</p>`;
};

const cardRoot = document.getElementById("root");
const selectDirector = document.getElementById("selectDirector");
const selectProducer = document.getElementById("selectProducer");
const selectSort = document.getElementById("selectSort");
const clearButton = document.getElementById("clearButton");
const inputFilm = document.getElementById("inputFilm");
const form = document.getElementById("form");
const aggregateCalculation = document.getElementById("aggregateCalculation");

const createCardFront = (film) => {
  return `
        <section class="card">
          <div class="cardFront"> 
            <picture>
                <img src="${film.poster}"/>
            </picture>
          </div> 
          <div class="cardBack">
            <h2>Title: ${film.title}</h2>
            <p>Description: ${film.description}</p>
            <p class="m0">Director: ${film.director}</p>
            <p class="m0">Producer: ${film.producer}</p>
            <p class="m0">Release Date: ${film.release_date} Rating Score: ${film.rt_score}</p>
          </div>
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
    const result = filterDirector(data.films, selectDirector.value);
    cardRoot.innerHTML = createCards(result);
    setAggregateCalculateText(
      `O diretor ${selectDirector.value}  produziu ${computeStats(
        result,
        data.films
      )}% do total de filmes`
    );
  });
  selectProducer.addEventListener("change", () => {
    const result = filterProducer(data.films, selectProducer.value);
    cardRoot.innerHTML = createCards(result);
    setAggregateCalculateText(
      `O produtor ${selectProducer.value} produziu ${computeStats(
        result,
        data.films
      )}% do total de filmes`
    );
  });
  selectSort.addEventListener("change", () => {
    const parameters = selectSort.value.split(",");

    cardRoot.innerHTML = createCards(
      sortData(data.films, parameters[0], parameters[1])
    );
    setAggregateCalculateText(
      `Você ordenou os filmes por ${translate(selectSort.value)}`
    );
  });
  clearButton.addEventListener("click", () => {
    cardRoot.innerHTML = createCards(data.films);
    setAggregateCalculateText(`Você está vendo todos os filmes`);
  });
  inputFilm.addEventListener("keyup", (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      if (inputFilm.value !== "") {
        const result = filterFilm(data.films, inputFilm.value);
        cardRoot.innerHTML = createCards(result);
        setAggregateCalculateText(
          `O que você pesquisou representa ${computeStats(
            result,
            data.films
          )}% do total de filmes`
        );
      }
    }
  });
  form.addEventListener("keyup", (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  });
  form.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  });
});
