import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25 * 60); 
  const [breakLength, setBreakLength] = useState(5 * 60); 
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

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
    clearInterval(timer);
  };

  return (
    <main className="cuerpo">
      <h1 className="hora">{formatTime(sessionLength)}</h1>
      <div>
        <button onClick={startTimer}>
          <i className="bi bi-play-circle-fill"></i>
        </button>
        <button onClick={pauseTimer}>
          <i className="bi bi-pause-circle-fill"></i>
        </button>
        <button onClick={resetTimer}>
          <i className="bi bi-skip-backward-circle-fill"></i>
        </button>
      </div>
    </main>
  );
};

export default App;
