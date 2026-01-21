
import { useAppSelector } from "@/app/store";
import { SearchModal } from "./SearchModal/SearchModal"
import { TrailerModal } from "./TrailerModal/TrailerModal";
// import { AuthModal } from "./AuthModal/AuthModal"


export const Modals = () => {
  const isSearchOpen = useAppSelector(state => state.ui.isSearchOpen);
  const isTrailerOpen = useAppSelector(
    state => state.trailer.isTrailerOpen
  );

  return (
    <>
      {isSearchOpen && <SearchModal />}
      {/* {isAuthOpen && <AuthModal />*/}
      {isTrailerOpen && <TrailerModal />} 
    </>
  );
};
