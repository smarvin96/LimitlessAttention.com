import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apply from "./components/Apply";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";

import Testimonials from "./components/Testimonials";
import ApplyPage from "./pages/ApplyPage";
import MainPage from "./pages/MainPage";
import routes from "./routes/routes";

const App = () => {
  return (
    <>
      {/* <Apply/>  */}
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
       {/* <MainPage/> */}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
