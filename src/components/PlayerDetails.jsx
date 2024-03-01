export function PlayerDetails({ player }){
  return(
    <dialog open={player.id}>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} width={200} height={300}/>
      <br />
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}