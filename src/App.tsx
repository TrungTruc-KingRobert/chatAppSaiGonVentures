// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";

// auth provider
import AuthProvider from "./contexts/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<ChatRoom />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
