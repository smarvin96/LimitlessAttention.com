import { BrowserRouter, Routes } from "react-router-dom";
import Apply from "./components/Apply";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import ApplyPage from "./pages/ApplyPage";
import MainPage from "./pages/MainPage";
import routes from "./routes/routes";



const App = () => {
  return ( <>
  



  <Apply/> 
   {/* <Header/> */}
   {/* <Hero/> */}
  {/* <Benefits/> */}
  {/* <Testimonials/> */}
  {/* <Contact/> */}
  {/* <Faqs/>  */}
   {/* <Footer/>  */}
</>

  // <BrowserRouter>
  //       <Routes>
  //         {routes.map((route)=>{
  //           return(<Route key={route.id} {...route} />)
  //         })}
  //       </Routes>
  //   </BrowserRouter> 
    

  

 );
}
 
export default App;
