import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:id', element: <GameDetailPage /> }
    ]
  }
]);

export default MainRoutes;
