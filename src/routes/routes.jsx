import ApplyPage from "../pages/ApplyPage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";


const routes = [
  { path: "/", element: <MainPage />, id: 1 },
  { path: "/apply", element: <ApplyPage />, id: 2 },
  { path: "*", element: <NotFoundPage />, id: 3 },
];

export default routes;
