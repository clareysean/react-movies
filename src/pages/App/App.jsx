import { useState } from "react";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      <LoginPage />
    </main>
  );
}

export default App;
