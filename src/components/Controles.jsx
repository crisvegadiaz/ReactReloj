/* eslint-disable react/prop-types */
export default function Controles({ startTimer, pauseTimer, resetTimer }) {
  return (
    <section>
      <button onClick={startTimer}>
        <i className="bi bi-play-circle-fill"></i>
      </button>
      <button onClick={pauseTimer}>
        <i className="bi bi-pause-circle-fill"></i>
      </button>
      <button onClick={resetTimer}>
        <i className="bi bi-skip-backward-circle-fill"></i>
      </button>
    </section>
  );
}
