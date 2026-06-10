import { useState } from "react";
import Welcome from "./components/Welcome";
import UserContextProvider  from "./context/UserContext";
import Button from "./components/Button";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {

  return (
    <>
    <UserContextProvider value={{ name: "John Doe" }}>
      <Welcome />
    </UserContextProvider>
    <ThemeContextProvider value={{ theme: "dark" }}>
      <Button />
    </ThemeContextProvider>
    </>
  );
}

export default App;
