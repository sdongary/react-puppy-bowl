import { useEffect, useState } from 'react'
import './App.css'
import { getPlayers,getSinglePlayers, deletePlayer, createPlayer } from './api';
import { Player } from "./components/Player";
import { PlayerDetails } from "./components/PlayerDetails";
import { PlayerForm } from "./components/PlayerForm";



function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [filter, setFilter] = useState("");


  useEffect(() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);

  function  handlePlayerClick(playerId){
    getSinglePlayers(playerId).then(setPlayer);
  }

  function handlePlayerDelete(){
    deletePlayer(playerId).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }

  function handleSubmit(evt){
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const newPlayer = Object.fromEntries(formData.entries);
    createPlayer(newPlayer).then(() => {
      getPlayers().then(() => {
        setPlayers(players);
      });
    });
  }

  function handleFilter(evt){
    setFilter(evt.target.value);
  }

  return (
    <>
      <h1>Puppy Bowl</h1>
      <PlayerDetails player = {player}/>
      <PlayerForm player={player} onSubmit={handleSubmit} />

      <label htmlFor="filter">Search:</label>
      <input type="text" name='filter' value={filter} onChange={handleFilter} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Status</th>
          </tr>
        </thead>
      
        <tbody>
          {players.filter((player) => player.name.toLowerCase().includes(filter.toLowerCase())).map((player) => {
            return(
              <Player key={player.id} player={player} onClick={handlePlayerClick} onDelete={handlePlayerDelete}/>
            );
          })}
        </tbody>
      </table> 
    </>
  );
}

export default App
