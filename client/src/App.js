import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {Router, Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import ManageStatus from './views/ManageStatus';



function App() {
  const [players, setPlayers] = useState([]);


  return (
    <div className="App">
      <h2>
        <Link to="/players/list">Manage Players</Link> | <Link to="/status/game/1">Manage Player Status</Link>
      </h2>
      <Router>
        <PlayerList path="players/list" players={players} setPlayers={setPlayers} />
        <AddPlayer path="players/addplayer" players={players} setPlayers={setPlayers} />
        <ManageStatus path="status/game/:gameId" players={players} setPlayers={setPlayers} />
      </Router>
    </div>
  );
}

export default App;
