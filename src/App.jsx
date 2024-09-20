import { HeaderComponent, Footer } from "./Components/Elements";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import userContext from "./utils/userContext";

function App() {
  const [user, setUser] = useState({
    name: "Manikanta",
    email: "mani@google.com",
  });

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <HeaderComponent></HeaderComponent>
        <Outlet></Outlet>
        <Footer></Footer>
      </userContext.Provider>
    </>
  );
}

export default App;
