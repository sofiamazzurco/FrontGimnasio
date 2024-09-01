import "./App.css";
import Landing from "./components/landing/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutinesLanding from "./components/routinesLanding/RoutinesLanding";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {

  // -----------------------------------------------
  // fetcheo rutinas
  // -----------------------------------------------

  const [routines, setRoutines] = useState([]);

  const fetchRoutines = async () => {
    try {
      const response = await fetch(
        "https://localhost:7067/api/Routine/GetAllRoutine");
      const data = await response.json();
      setRoutines(data);
    } catch (error) {
      console.log("Error al solicitar rutinas a la base de datos:", error);
    }
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  // ------------------------------------------------------
  // fetcheo ejercicios
  // ----------------------------------------------------------

  const [exercises, setExercises] = useState([]);

  const fetchExercises = async () => {
    try {
      const response = await fetch(
        "https://localhost:7067/api/Exercise/Get");
      const data = await response.json();
      setExercises(data);
    } catch (error) {
      console.log("Error al solicitar ejercicios a la base de datos:", error);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);


  // ---------------------------------------------------------------
  // delete Rutinas
  // -------------------------------------------------------------------
  const deleteRoutineHandler = async (routineId) => {
    try {
      await fetch(`https://localhost:7067/api/Routine/DeleteRoutine/${routineId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      await fetchRoutines(); 
    } catch (error) {
      console.log("Error al eliminar rutina de la base de datos:", error);
    }
  };
  


  const router = createBrowserRouter([
    {
      // ruta por defecto, el landing.
      path: "/",
      element: <Landing />,
    },
    {
      // landing rutinas
      path: "/routines",
      element: <RoutinesLanding exercises={exercises} routines={routines} onDeleteRoutine={deleteRoutineHandler}/>,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
      <Footer/>
    </>
  );
}

export default App;