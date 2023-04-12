//A01753176 - Gilberto André García Gaytán
/**
 * The function returns a component that displays three buttons for adding points to two teams and
 * resetting the score.
 * @returns The `Botones` component is being returned, which renders three buttons with `handlePuntoA`,
 * `handlePuntoB`, and `handleReset` functions as their `onClick` event handlers.
 */
function Botones({ handlePuntoA, handlePuntoB, handleReset }) {
  return (
    <div className="Botones">
      <button onClick={handlePuntoA}>+15 Equipo A</button>
      <button onClick={handlePuntoB}>+15 Equipo B</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}

export default Botones;
