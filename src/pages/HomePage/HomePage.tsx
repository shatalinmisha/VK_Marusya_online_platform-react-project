import { Hero } from "@/widgets/Hero/Hero";
import "./HomePage.module.scss";
import { MoviesRow } from "@/widgets/MoviesRow";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <MoviesRow title="Топ 10 фильмов" query="top10" />
    </main>
  );
};
