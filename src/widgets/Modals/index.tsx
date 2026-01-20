
import { useAppSelector } from "@/app/store";
import { SearchModal } from "./SearchModal/SearchModal"
// import { AuthModal } from "./AuthModal/AuthModal"
// import { TrailerModal } from "./TrailerModal/TrailerModal"

export const Modals = () => {
  const { isSearchOpen } = useAppSelector(
    state => state.ui
  );

  return (
    <>
      {isSearchOpen && <SearchModal />}
      {/* {isAuthOpen && <AuthModal />}
      {isTrailerOpen && <TrailerModal />} */}
    </>
  );
};
