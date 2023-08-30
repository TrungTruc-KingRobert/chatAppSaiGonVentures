// hooks
import { ReactNode, createContext, useEffect, useState } from "react";

// react router dom
import { useNavigate } from "react-router-dom";

// firebase
import { auth, db, onAuthStateChanged } from "../firebase/config";

// loading
import LoadingPage from "../components/Loading/LoadingPage";

// user interface
import { userInterface } from "../interfaces/UserInterface";

// giá trị ban đầu của context
const initValue = {
  uid: "",
  email: "",
  displayName: "",
  photoURL: ""
};

export const AuthContext = createContext<userInterface>(initValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userInterface>(initValue);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // Lắng nghe sự thay đổi của auth state để điều hướng
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userGoogle) => {
      if (userGoogle) {
        const newUser: userInterface = {
          uid: userGoogle.uid ? userGoogle.uid : "",
          email: userGoogle.email ? userGoogle.email : "",
          displayName: userGoogle.displayName ? userGoogle.displayName : "",
          photoURL: userGoogle.photoURL ? userGoogle.photoURL : ""
        };
        setUser(newUser);
        setIsLoading(false);
        navigate("/");
        return;
      }

      setIsLoading(false);
      navigate("/login");
    });

    return () => {
      unSubscribe();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={user}>
      {isLoading ? <LoadingPage size={56} /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
