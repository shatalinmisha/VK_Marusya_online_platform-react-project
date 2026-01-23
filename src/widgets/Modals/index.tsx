
import { useAppSelector } from "@/app/store";
import { AuthModal } from "./AuthModal/AuthModal"
import { TrailerModal } from "./TrailerModal/TrailerModal";



export const Modals = () => {
  const { isAuthOpen } = useAppSelector(state => state.auth);
  const isTrailerOpen = useAppSelector(state => state.trailer.isTrailerOpen);

  return (
    <>
      {isAuthOpen && <AuthModal />}
      {isTrailerOpen && <TrailerModal />} 
    </>
  );
};
