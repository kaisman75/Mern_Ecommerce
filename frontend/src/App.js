import react from "react"
import Header from "./Components/Header"
import Main from "./Components/main"
import Footer from "./Components/footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
   
     <BrowserRouter>
    <div className="grid-container">
        
        <Header/> 
        <Main/>
        <Footer/>
   
      </div>
   </BrowserRouter>
  
  );
}

export default App;
