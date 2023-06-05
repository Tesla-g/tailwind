import { useState } from "react";
import Nav from "./components/Nav";

const App = () => {
  const [theme, settheme] = useState("dark");
  return (
    <div
      className={`${theme} ${
        theme === "dark" ? "bg-[#0c0c0d]" : null
      } h-[100vh]`}
    >
      <Nav />
    </div>
  );
};
export default App;
