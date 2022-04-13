import {
  filterDirector,
  filterProducer,
  sortData,
  filterFilm,
  computeStats,
} from "./data.js";
import data from "./data/ghibli/ghibli.js";

describe("filter director test", () => {
  it("is a function", () => {
    expect(typeof filterDirector).toBe("function");
  });

  it("should return 9 films with Hayo Miyazaki", () => {
    expect(filterDirector(data.films, "Hayo Miyazaki").length).toBe(9);
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});
