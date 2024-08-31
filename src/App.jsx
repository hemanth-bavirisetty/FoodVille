import HeaderComponent from "./Components/Elements/HeaderComponent";
import './App.css'
import {Outlet} from "react-router-dom"


function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Outlet></Outlet>
      
    </>
  )
}


export default App;
