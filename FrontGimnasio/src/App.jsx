import "./App.css";
import Landing from "./components/landing/Landing";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RoutinesLanding from "./components/routinesLanding/RoutinesLanding";
import Footer from "./components/footer/Footer";

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
    <Footer />
    
    </>
  );
}

export default App;