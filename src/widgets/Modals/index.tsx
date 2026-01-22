
import { useAppSelector } from "@/app/store";
import { TrailerModal } from "./TrailerModal/TrailerModal";
// import { AuthModal } from "./AuthModal/AuthModal"


export const Modals = () => {
  const isTrailerOpen = useAppSelector(
    state => state.trailer.isTrailerOpen
  );

  return (
    <>
      {/* {isAuthOpen && <AuthModal />*/}
      {isTrailerOpen && <TrailerModal />} 
    </>
  );
};
