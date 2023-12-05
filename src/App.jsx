import "bootstrap-icons/font/bootstrap-icons.css";
import { formatTime } from "./js/formatTime.js";
import Controles from "./components/Controles";
import { useState, useEffect } from "react";
import Ajustes from "./components/Ajustes";
import "./App.css";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [timer, setTimer] = useState(null);
  const [valor1, setValor1] = useState(25 * 60);
  const [valor2, setValor2] = useState(5 * 60);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  useEffect(() => {
    if (sessionLength === 0) {
      setSessionLength(breakLength);
      const audio = new Audio("https://s27.aconvert.com/convert/p3r68-cdx67/kr3ny-ufomh.mp3");
      audio.play()
    }
  }, [sessionLength, breakLength]);

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setSessionLength((prevSession) => prevSession - 1);
    }, 1000);
    setTimer(intervalId);
  };

  const pauseTimer = () => {
    clearInterval(timer);
  };

  const resetTimer = () => {
    setSessionLength(25 * 60);
    setBreakLength(5 * 60);
    setValor1(25 * 60);
    setValor2(5 * 60);
    clearInterval(timer);
  };

  const menosLongitud = () => {
    if (breakLength == 60) {
      return;
    }
    setBreakLength(breakLength - 60);
    setValor2(valor2 - 60);
  };

  const masLongitud = () => {
    setBreakLength(breakLength + 60);
    setValor2(valor2 + 60);
  };

  const menosDuracion = () => {
    if (sessionLength == 60) {
      return;
    }
    setSessionLength(sessionLength - 60);
    setValor1(valor1 - 60);
  };

  const masDuracion = () => {
    setSessionLength(sessionLength + 60);
    setValor1(valor1 + 60);
  };

  return (
    <main className="cuerpo">
      <Ajustes
        menosDuracion={menosDuracion}
        menosLongitud={menosLongitud}
        sessionLength={valor1}
        masLongitud={masLongitud}
        masDuracion={masDuracion}
        breakLength={valor2}
      />
      <h1 className="hora">{formatTime(sessionLength)}</h1>
      <Controles
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </main>
  );
};

export default App;
