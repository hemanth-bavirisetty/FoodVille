import { HeaderComponent, Footer } from './Components/Elements';
import './App.css'
import {Outlet} from "react-router-dom"


function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  )
}

  
export default App;
