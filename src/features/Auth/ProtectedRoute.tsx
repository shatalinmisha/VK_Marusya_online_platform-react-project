import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/app/store";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useAppSelector(state => state.auth.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
