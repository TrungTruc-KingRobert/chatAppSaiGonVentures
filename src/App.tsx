// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import AddRoomModal from "./components/Modal/AddRoomModal";

// providers
import AuthProvider from "./contexts/AuthProvider";
import AppProvider from "./contexts/AppProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
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
          <AddRoomModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
