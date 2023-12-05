/* eslint-disable react/prop-types */
import { formatTime } from "../js/formatTime.js";

export default function Ajustes({
  menosDuracion,
  menosLongitud,
  sessionLength,
  masLongitud,
  masDuracion,
  breakLength,
}) {
  return (
    <section className="ajuste">
      <article className="ajuste2">
        <h3 className="longitud">Longitud de descanso</h3>
        <button onClick={menosLongitud}>
          <i className="bi bi-arrow-down-circle-fill"></i>
        </button>
        <p className="time">{formatTime(breakLength)}</p>
        <button onClick={masLongitud}>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
      </article>
      <article className="ajuste2">
        <h3 className="longitud">Duración de la sesión</h3>
        <button onClick={menosDuracion}>
          <i className="bi bi-arrow-down-circle-fill"></i>
        </button>
        <p className="time">{formatTime(sessionLength)}</p>
        <button onClick={masDuracion}>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
      </article>
    </section>
  );
}
