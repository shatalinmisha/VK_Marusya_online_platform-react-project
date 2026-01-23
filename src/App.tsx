import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GenresPage } from "./pages/GenresPage";
import { GenrePage } from "./pages/GenrePage";
import { MoviePage } from "./pages/MoviePage";
import { AccountPage } from "./pages/AccountPage";
import { Header } from "./widgets/Header";
import { Modals } from "./widgets/Modals";
import { useAppDispatch } from "./app/store";
import { useEffect } from "react";
import { fetchProfile } from "./features/Auth/authSlice";
import { ProtectedRoute } from "@/features/Auth/ProtectedRoute";
import { Footer } from "./widgets/Footer";

const App = () => {
const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(fetchProfile());
}, []);

  return (
    <>
      <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/genres/:id" element={<GenrePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/account" element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
          } />
      </Routes>
    </main> 
    <Modals />
    <Footer/>
    </>
  );
}

export default App;
