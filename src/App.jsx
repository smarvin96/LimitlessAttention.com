import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import routes from "./routes/routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
