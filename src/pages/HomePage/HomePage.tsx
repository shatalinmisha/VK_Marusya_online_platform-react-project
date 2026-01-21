import { Hero } from "@/widgets/Hero";
import "./HomePage.module.scss";
import { MoviesRow } from "@/widgets/MoviesRow";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <MoviesRow title="Топ 10 фильмов" query="top10" />
    </>
  );
};
