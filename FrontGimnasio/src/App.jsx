import "./App.css";
import Landing from "./components/landing/Landing";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RoutinesLanding from "./components/routinesLanding/RoutinesLanding";

function App() {
  
  const router = createBrowserRouter([
    {
      // ruta por defecto, el landing.
      path: "/",
      element: <Landing/>,
    },
    {
      // landing rutinas
      path: "/routines",
      element: <RoutinesLanding/>,
    },
  ]);

  return (
    <>
    <div>
      <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;