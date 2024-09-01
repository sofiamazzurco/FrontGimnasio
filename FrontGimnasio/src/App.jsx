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
  

  // ------------------------------------------------------
  // Post Rutinas
  // ----------------------------------------------------------

  const addRoutine = async (newRoutine) => {
    try {
      console.log("Ejecutando callback addRoutine");
      await fetch("https://localhost:7067/api/Routine/CreateRoutine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoutine),
      });

      await fetchRoutines();
    } catch (error) {
      console.log("Error al agregar película a la base de datos:", error);
    }
  };

  // -----------------------------------------------------------
  // modify Rutinas
  // -----------------------------------------------------
   const modifyRoutineHandler = async (updatedRoutine) => {
    try {
      const response = await fetch(
        `https://localhost:7067/api/Routine/UpdateRoutine/${routineId}`
      );
      const currentRoutine = await response.json();

      // combino los datos nuevos con los datos existentes
      const updatedRoutine = {
        ...currentRoutine,
        ...updatedRoutine,
      };

      // actualizo la rutina en la base sin que se eliminen sus propiedades que no son modificadas
      await fetch(`https://localhost:7067/api/Routine/UpdateRoutine/${routineId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRoutine),
      });

      await fetchRoutines();
    } catch (error) {
      console.log("Error al modificar rutina en la base de datos:", error);
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
      element: <RoutinesLanding exercises={exercises} routines={routines} onDeleteRoutine={deleteRoutineHandler} onModifyRoutine={modifyRoutineHandler} addRoutine={addRoutine}/>,
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