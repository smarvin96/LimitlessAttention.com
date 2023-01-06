import { BrowserRouter, Routes } from "react-router-dom";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import ApplyPage from "./pages/ApplyPage";
import routes from "./routes/routes";



const App = () => {
  return ( <>
  
  {/* <BrowserRouter>
        <Routes>
          {routes.map((route)=>{
            return(<Route key={route.id} {...route} />)
          })}
        </Routes>
    </BrowserRouter> */}


  
  <Header/>
  <Hero/>
  <Benefits/>
  <Testimonials/>
  <Contact/>
  <Faqs/>
  <Footer/>

  </> );
}
 
export default App;
