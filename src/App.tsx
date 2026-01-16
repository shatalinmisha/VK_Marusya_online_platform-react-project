import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GenresPage } from "./pages/GenresPage";
import { GenrePage } from "./pages/GenrePage";
import { FilmPage } from "./pages/FilmPage";
import { AccountPage } from "./pages/AccountPage";
import { Header } from "./widgets/Header";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/genres/:id" element={<GenrePage />} />
        <Route path="/film/:id" element={<FilmPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>

      {/* <Modals /> */}
    </>
  );
}

export default App;
