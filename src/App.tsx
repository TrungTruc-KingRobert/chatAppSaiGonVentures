// react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
