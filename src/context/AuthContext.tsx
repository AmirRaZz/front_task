"use client";

import { loginApi } from "@/services/authService";
import { createContext, useContext, useReducer } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type User = {
  // Define the actual user properties based on API response
  firstName: string;
  lastName: string;
  profile_image: string;
  phone_number: string;
  [key: string]: unknown; // For any additional properties that might be present
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error?: string;
};

type AuthAction = {
  type: "LOADING" | "LOGIN";
  payload?: User | null;
};

type AuthContextType = {
  isLoading: boolean;
  signin: (data: { phone_email: string; password: string }) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "LOGIN":
      return {
        user: action.payload || null,
        isAuthenticated: true,
        isLoading: false,
      };
    default:
      throw new Error("Invalid action");
  }
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ isLoading }, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();

  const signin = async (data: { phone_email: string; password: string }) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await loginApi(data);
      dispatch({ type: "LOGIN", payload: res.data });
      toast.success(res.data.message);
      router.push("/");
    } catch (error: unknown) {
      // Get error message from different error types
      const errorMessage =
        error instanceof Error
          ? error.message
          : typeof error === "object" && error && "response" in error
          ? (error as { response?: { data?: { message?: string } } }).response
              ?.data?.message || "API error"
          : "An unknown error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoading, signin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
